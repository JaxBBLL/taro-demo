import React, { useReducer } from 'react';
import { context as Context } from './context';
import { state as initialState } from './state';
import { reducer } from './reducer';

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const asyncDispatch = action => {
    if (isPromise(action.payload)) {
      dispatch({ type: 'loading_start' });
      action.payload
        .then(v => {
          dispatch({ type: 'loading_end' });
          dispatch({ type: action.type, payload: v });
        })
        .catch(() => {
          dispatch({ type: 'loading_end' });
        });
    } else {
      dispatch(action);
    }
  };
  return (
    <Context.Provider value={{ state, dispatch: asyncDispatch }}>
      {children}
    </Context.Provider>
  );
}
