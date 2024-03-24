import React, { useState, useEffect } from 'react';
import './Loanapplication.css';

const Loanapplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phoneNumber: '',
    city: '',
    state: '',
    postalCode: '',
    panCardNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

useEffect(() => {
    const handleResize = () => {
        const form = document.querySelector('.loan-application-form');
        if (form) {
            const width = form.offsetWidth;
            const inputFields = form.querySelectorAll('.form-control');
            inputFields.forEach((input) => {
                input.style.width = (width - 40) + 'px'; // Adjust width as needed
            });
        }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="loan-application-form">
      <h2 className="form-title">Loan Application Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select 
          id="gender" 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange} 
          className="form-control" 
          required 
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input 
          type="tel" 
          id="phoneNumber" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          value={formData.city} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input 
          type="text" 
          id="state" 
          name="state" 
          value={formData.state} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code:</label>
        <input 
          type="text" 
          id="postalCode" 
          name="postalCode" 
          value={formData.postalCode} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="panCardNo">PAN Card No:</label>
        <input 
          type="text" 
          id="panCardNo" 
          name="panCardNo" 
          value={formData.panCardNo} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <button 
        type="submit" 
        className="btn-submit" 
      >
        Submit
      </button>
    </form>
  );
};

export default Loanapplication;