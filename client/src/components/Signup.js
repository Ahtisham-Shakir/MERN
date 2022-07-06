import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e)=>{
    setRegister({
      ...register,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(register);
  }

  return (
    <>
    <h2 className='text-center mt-5'>Signup</h2>
    <div className='container w-50 box mt-3'>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Name</label>
          <input type="text" name='name' value={register.name} onChange={handleChange} className="form-control" id="inputPassword4" />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" name='email' value={register.email} onChange={handleChange} className="form-control" id="inputEmail4" />
        </div>

        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="number" name='phone' value={register.phone} onChange={handleChange} className="form-control" id="phone" />
        </div>

        <div className="col-md-6">
          <label htmlFor="work" className="form-label">Profession</label>
          <input type="text" name='work' value={register.work} onChange={handleChange} className="form-control" id="work" />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name='password' value={register.password} onChange={handleChange} className="form-control" id="password" />
        </div>
        <div className="col-md-6">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" name='cpassword' value={register.cpassword} onChange={handleChange} className="form-control" id="cpassword" />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      <Link to='/login'>Already have an account?</Link>
    </div>
    </>
  )
}

export default Signup