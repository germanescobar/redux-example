import React, { useEffect, useState } from 'react';
import store from '../store';

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    store.subscribe(() => {
      setAuthenticated(store.getState().authenticated);
    });
  }, [])

  return (
    <header className="main">
      <h1>State Example</h1>
      <nav>
        { authenticated ? <a href="#">Salir</a> : <a href="#">Ingresar</a> }
      </nav>
    </header>
  )
}

export default Header
