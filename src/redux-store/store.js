import { legacy_createStore as createStore } from "redux";

const initialState = {
  counter: 0,
};

export const upAction = {
  type: "UP",
};

export const downAction = {
  type: "DOWN",
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "UP":
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };

    case "DOWN":
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };

    default:
      return prevState;
  }
};

export const store = createStore(reducer);
