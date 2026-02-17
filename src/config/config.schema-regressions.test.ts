import { describe, expect, it } from "vitest";
import { validateConfigObject } from "./config.js";

describe("config schema regressions", () => {
  it("accepts nested telegram groupPolicy overrides", () => {
    const res = validateConfigObject({
      channels: {
        telegram: {
          groups: {
            "-1001234567890": {
              groupPolicy: "open",
              topics: {
                "42": {
                  groupPolicy: "disabled",
                },
              },
            },
          },
        },
      },
    });

    expect(res.ok).toBe(true);
  });

  it("accepts whatsapp dmWakePhrase and dmStopPhrase", () => {
    const res = validateConfigObject({
      channels: {
        whatsapp: {
          allowFrom: ["+1555"],
          dmWakePhrase: "LadyJusticeAI",
          dmStopPhrase: "stop",
        },
      },
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.config.channels?.whatsapp?.dmWakePhrase).toBe("LadyJusticeAI");
      expect(res.config.channels?.whatsapp?.dmStopPhrase).toBe("stop");
    }
  });

  it('accepts memorySearch fallback "voyage"', () => {
    const res = validateConfigObject({
      agents: {
        defaults: {
          memorySearch: {
            fallback: "voyage",
          },
        },
      },
    });

    expect(res.ok).toBe(true);
  });
});
