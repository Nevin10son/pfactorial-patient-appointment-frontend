import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css'; // ✅ Import the CSS file

const LoginComponent = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigation = useNavigate();

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (input.email === 'nevin@staff.login' && input.password === '123456') {
      sessionStorage.setItem('emailid', input.email);
      sessionStorage.setItem('password', input.password);
      navigation('/usercalender');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="login-container">
        <h1>Clinic Login</h1>
      <form className="login-form" onSubmit={submitHandler}>
        

        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            name="email"
            placeholder='Enter emailid here...'
            value={input.email}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder='Type your password here...'
            value={input.password}
            onChange={inputHandler}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
