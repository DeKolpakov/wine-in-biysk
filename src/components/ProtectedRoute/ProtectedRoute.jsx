import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ageVerified, ...props }) {
  const isVerified = localStorage.getItem('ageVerified') === 'true';
  return isVerified ? <Component {...props} /> : <Navigate to="/adult-notification" />;
}

export default ProtectedRoute;
