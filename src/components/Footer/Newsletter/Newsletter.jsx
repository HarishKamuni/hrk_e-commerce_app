import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import './Newsletter.scss';
import { NavLink } from 'react-router-dom';
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== '') alert(`Your Email : ${email} Successfully Subscribe!!!`);
    else alert('please fill the field!!!');
  };
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <form onSubmit={submitHandler} className="d-flex">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <div className="icon">
            <NavLink to="/">
              <FaLinkedinIn size={14} style={{ color: '#fff' }} />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/">
              <FaFacebookF size={14} style={{ color: '#fff' }} />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="https://twitter.com/HarishKamuni21">
              <FaTwitter size={14} style={{ color: '#fff' }} />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/">
              <FaInstagram size={14} style={{ color: '#fff' }} />
            </NavLink>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
