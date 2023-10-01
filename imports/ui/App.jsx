// client/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Admin from './Admin';
import Borrower from './Borrower';
import Lender from './Lender';
import Hello from './Hello';
import Auth from './Auth';

const Appsample = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Your Loan Management App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/borrower">Borrower</Link>
              </li>
              <li>
                <Link to="/lender">Lender</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/borrower">
              <Borrower />
            </Route>
            <Route path="/lender">
              <Lender />
            </Route>
          </Switch>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
};

// export default Appsample;



const App1 = () => {
  return (
    <Router>
      <div>
        {/* Header and navigation links as shown in the previous example */}
        <main>
          <Switch>
            <Route path="/admin">
              <Auth role="Admin" />
            </Route>
            <Route path="/borrower">
              <Auth role="Borrower" />
            </Route>
            <Route path="/lender">
              <Auth role="Lender" />
            </Route>
            <Route path="/">
              <Hello />
            </Route>
          </Switch>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
};

export default App1;