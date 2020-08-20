import { createStore } from 'redux';

const reducer = (prevState={ authenticated: false }, action) => {
  if (action.type === "LOGIN") {
    if (action.email === "test@example.com" && action.password === "test1234" ) {
      return { authenticated: true };
    }
  } else if (action.type === "LOGOUT") {
    return { authenticated: false };
  }

  return prevState;
}

export const login = (email, password) => {
  return { type: "LOGIN", email, password };
}

export default createStore(reducer);
