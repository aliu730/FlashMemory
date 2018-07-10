import React from 'react';

const Login = ({ show, login }) => {
  if (show) {
    return (
      <div className="loginBox">
        <div className="head">
          <span id="user">
            Username:
          </span>
          <input onChange={login} id="userInput" type="text" placeholder="ex: johndoe1234" />
          <span id="password">
            Password:
          </span>
          <input id="passwordInput" type="password" placeholder="ex: password" />
        </div>
      </div>
    );
  }
};

export default Login;
