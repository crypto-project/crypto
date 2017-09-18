// @flow

import type { Reducers } from "./reducers";
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import api from "./api";

export type ExchangeRateData = {
  base: string,
  target: string,
  price: string,
  volume: string,
  change: string
};

export type Action =
  | {|
      type: "EXCHANGE_RATE_REQUESTED",
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
        | {|
            base: string,
            target: string,
            error: Error
          |}
    |};

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Api = typeof api;
