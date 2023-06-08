import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPage = ({id}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users`,id);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h6>{user.firstName} {user.lastName}!</h6>
    </div>
  );
};

export default UserPage;
