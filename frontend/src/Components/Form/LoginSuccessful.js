import React from 'react';
import './LoginSuccessful.css';
const LoginSuccessful = () => {
    return (
      <div>
        <h1 className = "LogS">Login Successful!</h1>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg>
<p class="success">Redirecting to Dashboard!</p>
      </div>
    );
  }
  
  export default LoginSuccessful;
  