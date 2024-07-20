import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Link to="/new-blog-post">Create New Blog Post</Link>
      <Link to="/new-portfolio-project">Create New Portfolio Project</Link>
    </div>
  );
}

export default Admin;
