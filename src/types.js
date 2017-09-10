// @flow

export type ExchangeRateData = {
  base: string,
  target: string,
  price: string,
  volume: string,
  change: string
};

export type Action =
  | {|
      type: "REQUEST_EXCHANGE_RATE",
      payload: {|
        base: string | null,
        target: string | null
      |}
    |}
  | {|
      type: "FETCH_EXCHANGE_RATE_COMPLETE",
      payload:
        | {|
            base: string,
            target: string,
            data: ExchangeRateData
          |}
        | Error,
      error?: true
    |};
