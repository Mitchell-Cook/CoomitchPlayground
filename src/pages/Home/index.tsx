import React from 'react';

import './Home.css';
import logo from './logo.svg';

function Home() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} className="logo-image" alt="webiste logo" />
      </div>
      <div className="header">header</div>
      <div className="nav">nav</div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Home;