import { state as initialState } from "./state";

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGENAME":
      return {
        ...initialState,
        user: "JaxBBLL"
      };
    default:
      return initialState;
  }
}
