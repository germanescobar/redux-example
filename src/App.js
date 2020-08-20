import React from 'react';
import Header from './components/Header';
import Login from './screens/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

const Dashboard = () => <h1>Dashboard</h1>
const NotFound = () => <h1>No encontrado</h1>

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
