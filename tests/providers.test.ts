/** Provider adapter tests mock HTTP and assert only stable protocol semantics. */
import { describe, expect, it, vi } from "vitest";

import { z } from "zod";
import { zodOutputContract } from "../src/application/ports/ai-provider.js";
import { ProviderError } from "../src/domain/errors.js";
import { AnthropicProvider } from "../src/infrastructure/providers/anthropic-provider.js";
import { OpenAiProvider } from "../src/infrastructure/providers/openai-provider.js";

const output = zodOutputContract(
  "answer",
  "A test answer",
  z.object({ answer: z.string() }),
);

const request = {
  operation: "draft-linkedin-post" as const,
  instructions: "Return a grounded answer.",
  input: "Source data",
  output,
};

describe("OpenAI provider", () => {
  it("maps the generic contract to the Responses API", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(
        JSON.stringify({
          output: [
            { content: [{ type: "output_text", text: '{"answer":"ok"}' }] },
          ],
        }),
        { status: 200, headers: { "content-type": "application/json" } },
      ),
    );
    const provider = new OpenAiProvider({
      apiKey: "test-secret",
      model: "test-model",
      fetchImpl: fetchMock,
    });

    const result = await provider.generateStructured(request);

    const [url, init] = fetchMock.mock.calls[0] ?? [];
    const body = JSON.parse(String(init?.body)) as Record<string, any>;
    expect(url).toBe("https://api.openai.com/v1/responses");
    expect(new Headers(init?.headers).get("authorization")).toBe(
      "Bearer test-secret",
    );
    expect(body.store).toBe(false);
    expect(body.text.format.type).toBe("json_schema");
    expect(result.value).toEqual({ answer: "ok" });
  });
});

describe("Anthropic provider", () => {
  it("maps the same contract to the Messages API", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(
        JSON.stringify({
          content: [{ type: "text", text: '{"answer":"ok"}' }],
        }),
        { status: 200, headers: { "content-type": "application/json" } },
      ),
    );
    const provider = new AnthropicProvider({
      apiKey: "test-secret",
      model: "test-model",
      fetchImpl: fetchMock,
    });

    const result = await provider.generateStructured(request);

    const [url, init] = fetchMock.mock.calls[0] ?? [];
    const body = JSON.parse(String(init?.body)) as Record<string, any>;
    expect(url).toBe("https://api.anthropic.com/v1/messages");
    expect(new Headers(init?.headers).get("x-api-key")).toBe("test-secret");
    expect(new Headers(init?.headers).get("anthropic-version")).toBe(
      "2023-06-01",
    );
    expect(body.output_config.format.type).toBe("json_schema");
    expect(result.value).toEqual({ answer: "ok" });
  });
});

describe("provider failures", () => {
  it.each([
    [
      "openai",
      (fetchImpl: typeof fetch) =>
        new OpenAiProvider({ apiKey: "secret", model: "m", fetchImpl }),
    ],
    [
      "anthropic",
      (fetchImpl: typeof fetch) =>
        new AnthropicProvider({ apiKey: "secret", model: "m", fetchImpl }),
    ],
  ])(
    "normalizes %s HTTP errors without leaking credentials",
    async (_name, create) => {
      const provider = create(
        vi
          .fn<typeof fetch>()
          .mockResolvedValue(new Response("denied", { status: 401 })),
      );

      const error = await provider
        .generateStructured(request)
        .catch((cause) => cause);

      expect(error).toBeInstanceOf(ProviderError);
      expect(error).toMatchObject({ code: "auth" });
      expect(String(error)).not.toContain("secret");
    },
  );

  it("normalizes structured output that violates the requested contract", async () => {
    const provider = new OpenAiProvider({
      apiKey: "secret",
      model: "m",
      fetchImpl: vi.fn<typeof fetch>().mockResolvedValue(
        new Response(
          JSON.stringify({
            output: [
              { content: [{ type: "output_text", text: '{"wrong":true}' }] },
            ],
          }),
          { status: 200 },
        ),
      ),
    });

    const error = await provider
      .generateStructured(request)
      .catch((cause) => cause);

    expect(error).toMatchObject({ code: "invalid-output" });
  });
});
