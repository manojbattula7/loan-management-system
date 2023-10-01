// client/components/Hello.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <h2>Hello Component</h2>
      <p>Choose your role:</p>
      <div>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/borrower">
          <button>Borrower</button>
        </Link>
        <Link to="/lender">
          <button>Lender</button>
        </Link>
      </div>
    </div>
  );
};

export default Hello;
