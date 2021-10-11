import Header from '../Core/Header/Header';
import Footer from '../Core/Footer/Footer';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import UpdateAccount from '../UpdateAccount/UpdateAccount';
import ApplyLoan from '../ApplyLoan/ApplyLoan';
import Navbar from '../Core/Navbar/Navbar';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';

function App() {
  const [redirect, setRedirect] = React.useState(false);
  const [name, setName] = React.useState('');

  useEffect(() => {
    (
      async () => {
        const response = await fetch("http://localhost:12296/api/Auth/user", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        });

        const content= await response.json();
        setName(content.Username);
      }
    )();
  });

  return (
    <BrowserRouter>
      <div className="bg-image">
        <Navbar name={name} setUserName={ setName }/>
        <Switch>
          <Route exact path="/" component={() => <Home name={name} setUserName={ setName } />}>
          </Route>
          <Route path="/login" component={() => <Login name={name} setUserName={ setName } /> }>
            {/* <Login /> */}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/update-account">
            <UpdateAccount />
          </Route>
          <Route path="/apply-loan">
            <ApplyLoan />
          </Route>
        </Switch>
        <Footer className="sticky-footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
