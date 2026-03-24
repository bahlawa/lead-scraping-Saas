"use client";

import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/scrape");
  };

  return (
    <div className="auth-page">
      <Link to="/" className="auth-back">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg> Back to home
      </Link>
      
      <div className="auth-card">
        <div className="auth-logo" style={{ background: 'transparent', display: 'flex', alignItems: 'center', gap: '12px', width: 'auto', marginBottom: '24px' }}>
          <img src="/logo-shield-transparent.png" alt="Shield" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontWeight: '700', fontSize: '32px', letterSpacing: '-0.5px', color: '#fff', fontFamily: 'Inter, sans-serif' }}>Leadso</span>
        </div>
        <h1>Create an account</h1>
        <p className="subtitle">Start sourcing B2B leads today with 100 free credits.</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-wrapper">
            <label>Full Name</label>
            <div className="auth-input-icon">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <input type="text" className="auth-input" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          
          <div className="auth-input-wrapper">
            <label>Work Email</label>
            <div className="auth-input-icon">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              <input type="email" className="auth-input" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          
          <div className="auth-input-wrapper">
            <label>Password</label>
            <div className="auth-input-icon">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <input type="password" className="auth-input" placeholder="Create a password (min 8 chars)" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          
          <button type="submit" className="auth-submit">Sign Up</button>
        </form>
        
        <div className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}
