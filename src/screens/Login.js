import React, { useState } from 'react';
import store from '../store';
import { login as loginAction } from '../store';

export default () => {
  const [state, setState] = useState({ email: "", password: "" })

  const login = e => {
    e.preventDefault();
    store.dispatch(loginAction(state.email, state.password));
  }

  const logout = e => {
    e.preventDefault();
    store.dispatch({ type: "LOGOUT" });
  }

  return (
    <form onSubmit={login}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={e => setState({ ...state, email: e.target.value })} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={e => setState({ ...state, password: e.target.value })} />
      </div>
      <div>
        <button type="submit">Login</button>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    </form>
  )
}
