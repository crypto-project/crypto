// @flow
import type { ExchangeRateData } from "./types";

export default {
  getCurrency: async (
    base: string,
    target: string
  ): Promise<ExchangeRateData> => {
    const res = await fetch(
      `https://api.cryptonator.com/api/ticker/${base}-${target}`
    );
    if (res.status !== 200) {
      const error = new Error("request failed");
      //$FlowFixMe
      error.status = res.status;
      return Promise.reject(error);
    }
    const { ticker } = await res.json();
    return ticker;
  }
};
