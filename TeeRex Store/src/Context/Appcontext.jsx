import React, { createContext, useReducer } from "react";
import * as types from "./context.types";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  cart: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.GetDataRequest:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
    case types.GetDataSuccess:
      return {
        ...state,
        data: payload,
      };
    case types.GetDataError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.AddToCart:
      let newCartData = [...state.cart, payload];
      return { ...state, cart: newCartData };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
);
};