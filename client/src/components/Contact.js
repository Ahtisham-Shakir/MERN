import React, { useState } from 'react'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(contact);
  }


  return (
    <>
      <h2 className='text-center mt-5'>Get In Touch</h2>
      <div className='container w-50 box mt-3'>
        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="text" name='name' value={contact.name} onChange={handleChange} className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" name='email' value={contact.email} onChange={handleChange} className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">phone</label>
            <input type="number" name='phone' value={contact.phone} onChange={handleChange} className="form-control" id="inputEmail4" />
          </div>

          <div className="col-md-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name='message' rows='4' value={contact.message} onChange={handleChange} className="form-control" id="message" />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact