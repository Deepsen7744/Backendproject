import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Institute = (prop) => {

  function apv(){
    prop.setApprove(!prop.approve);
    prop.setForUser(true);
  }

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    registrationNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    prop.setRegisteri(true);
  };

  const notify = () => toast("File Downloaded");

  return (
    <div>
    {
     prop.registeri ? (
      //dashbord
      <div>
        <h2>Applications for certificate</h2>
        <div>{ prop.approve? (<p></p>) : (<div><p>Adarsh applied for certificate</p><button onClick={apv}>Approve</button></div>) }</div>
        <h2>Certificates Given</h2>
        <div>{ !prop.approve? (<p></p>) : (<div><p>Adarsh got this certificate</p><button onClick={notify}>download</button><ToastContainer /></div>) }</div>
      </div>
     ) : (
      //form
      <div>
      <div>
      <h2>Institute Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
      </div>
     )
    }
    </div>
  )
}

export default Institute