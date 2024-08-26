// AdminPanel.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const AdminPanel = () => {
  const { token } = useAuth();

  useEffect(() => {
    // Use the token to make authenticated requests
    fetch('/api/protected', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching protected data:', error);
      });
  }, [token]);

  return <div>Welcome to the Admin Panel</div>;
};

export default AdminPanel;
