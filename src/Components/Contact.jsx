import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      alert("Thank You For Your Submission")
      setFormData({ name: '', email: '', message: '' });

  };

  return (
    <div id='Contact'>
      <h1 className="heading"> Contact </h1>
      <div className='contact-container'>
            <form onSubmit={handleSubmit} method="POST">
                <div className='input-container'>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    />
                    </div>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                />
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
