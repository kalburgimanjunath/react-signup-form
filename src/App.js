import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="main">
      <div className="container">
        <div>
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ujTCDgGCAjlEMlNDG9pKxC4S2g4bULE3zDVU20pELA&s"
          />
          <h1>Lorem ipsum</h1>
          <p>
            Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat
            nisl et tempus et dolor tempus, sed et lorem adipiscing.
          </p>
        </div>
        <div>
          <input type="text" placeholder="Email address" />
          <button type="submit">Sign Up</button>
        </div>
        {/* social icons */}
      </div>
    </div>
  );
}
