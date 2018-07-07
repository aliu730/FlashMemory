import React from 'react';

const Login = ({ show, login }) => {
  if (show) {
    return (
      <div className="col-xs-5">
        <div className="head">
          <span>
            Username:
          </span>
          <input type="text" placeholder="ex: johndoe1234" />
          <span>
            Password:
          </span>
          <input type="text" placeholder="ex: password" />
        </div>
        <button onClick={login} type="button">
          Login
        </button>
      </div>
    );
  }
};

export default Login;
