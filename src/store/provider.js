import React, { useReducer } from "react";
import { context as Context } from "./context";
import { state as initialState } from "./state";
import { reducer } from "./reducer";

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
