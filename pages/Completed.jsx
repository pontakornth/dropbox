import React from 'react';
import { Link } from 'react-router-dom';

const Completed = () => (
  <div className="card">
    <h1>ข้อความถูกส่งไปแล้ว</h1>
    <div className="container">
      <Link className="button" to="/">ส่งอีก</Link>
    </div>
  </div>
);

export default Completed;
