import { GET_KITTENS } from "../actions/index";
import { arr } from "../initialData";

const initialState = {
  kittens: arr,
};

export const getKittenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITTENS:
      return { ...state, kittens: action.payload };
  }
  return state;
};
