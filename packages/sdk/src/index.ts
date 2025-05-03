import type { ScryConfig } from "./types";

class ScrySDK {
  private originalConsoleError: typeof console.error;
  private config: ScryConfig;

  constructor(config: ScryConfig) {
    this.config = {
      endpoint: 'https://scry.moonlitgrace.space/api/logs',
      ...config
    };
    this.originalConsoleError = console.error
    this.init()
  }

  private init() {
    // monkey-patch console.error
    console.error = (...args: unknown[]) => {
      this.captureError(args)
      this.originalConsoleError.apply(console, args)
    }

    if (this.config.debug) {
      console.log('[Scry] SDK initialized.')
    }
  }

  private async captureError(errorData: unknown[]) {
    try {
      const payload = {
        apiKey: this.config.apiKey,
        timestamp: new Date().toISOString(),
        error: errorData.map((err) => {
          return typeof err === 'object' ? JSON.stringify(err) : String(err)
        }),
        metadata: {
          url: window.location.href,
          userAgent: window.navigator.userAgent
        }
      };

      await fetch(this.config.endpoint!, {
        method: 'POST',
        body: JSON.stringify(payload)
      })
    } catch (err) {
      if (this.config.debug) {
        console.error('[Scry] Failed to send error: ', err)
      }
    }
  }
}

export function initScry(config: ScryConfig) {
  return new ScrySDK(config)
}
