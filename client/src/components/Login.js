import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(login);
  }

  return (
    <>
      <h2 className='text-center mt-5'>Login</h2>
      <div className='container w-50 box mt-3'>
        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" name='email' value={login.email} onChange={handleChange} className="form-control" id="inputEmail4" />
          </div>

          <div className="col-md-12">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name='password' value={login.password} onChange={handleChange} className="form-control" id="password" />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <Link to='/signup'>Create an Account</Link>
      </div>
    </>
  )
}

export default Login