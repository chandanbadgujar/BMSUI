import Header from '../Core/Header/Header';
import Footer from '../Core/Footer/Footer';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import UpdateAccount from '../UpdateAccount/UpdateAccount';
import ApplyLoan from '../ApplyLoan/ApplyLoan';
import Navbar from '../Core/Navbar/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
