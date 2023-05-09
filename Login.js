import React, { useState } from 'react';
import { Col, FormGroup,Label } from "reactstrap";
import book from './book.png';
import Picture1 from './Picture1.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    //alert('login!');
    event.preventDefault();
    // TODO: Handle login logic
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#192841',
    padding:'140px'
  }

  const inputStyle = {
    width: '500px',
    height: '30px',
    fontSize: '16px'
  };

    const buttonStyle = {
      backgroundColor: 'grey',
      width: '70px',
      height: '30px',
      fontSize: '18px'
      
    };

    const paragraphStyle = {
      color: 'white',
      fontSize:'19px',
      padding:'auto'
    };
    
    const imageStyle={
      borderRadius:'80%', 
      backgroundColor:'white',
      float: 'left',
      height: '100px',
    };


  return (
    
    <div className="login-container" style={containerStyle}>
      <div><img src={book} style={imageStyle}/></div>
      <form className="login-form" onSubmit={handleSubmit}>
      <FormGroup row>   
              <h1 style={paragraphStyle}>E- library</h1>
              <p style={paragraphStyle}> powered by</p>
              <img src={Picture1} alt="Picture1" style={{float:'right'}}/>
        <Col lg={20}>
        <label htmlFor="email" style={inputStyle}></label>
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
        <Col xs={12} md={8}>
        <label htmlFor="password" style={inputStyle}></label>
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
        size="md"
        className="btn btn-outline-info shadow-sm btn-block rounded"
        style={buttonStyle}
        >
           <a href="http://localhost:3000/surf"> Login</a>
            </button>
      </form>
    </div>
    
  );
}

export default Login;
