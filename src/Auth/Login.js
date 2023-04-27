import React, { useState } from 'react';
import { Col, FormGroup,Label } from "reactstrap";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <FormGroup row>
            <Label for="name" sm={10}>
                <img src='logo.png' className='App.logo' />
              <h1>E- library</h1>
              <p> powered by Capgemini</p>
            </Label>{" "}
            <Col sm={10}>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="email/SSO Id"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
         </Col>
          </FormGroup>

        <FormGroup row>
        <Col sm={10}>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        </Col>
        </FormGroup>

        <button type="submit"
        className="btn btn-outline-info shadow-sm btn-block rounded"
        color="blue">
            Login
            </button>
      </form>
    </div>
  );
}

export default Login;
