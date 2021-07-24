import React, { useEffect, useState } from 'react';

import FetchIntervalComponent from '../Component/FetchIntervalComponent';
import axios from 'axios';

const FetchIntervalContainer = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    setLoading(true);
    const res = await axios.get(process.env.REACT_APP_USER_INTERVAL);
    setUser(res.data.results[0]);
    setLoading(false);
  };

  const addNewUser = async () => {
    const res = await axios.get(process.env.REACT_APP_USER_INTERVAL);
    const newUser = [res.data.results[0], ...users];
    setUsers(newUser);
  };

  useEffect(() => {
    fetchUser();
    addNewUser();

    const interval = setInterval(() => {
      fetchUser();
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <FetchIntervalComponent
        user={user}
        loading={loading}
        fetchUser={fetchUser}
        users={users}
        addNewUser={addNewUser}
      />
    </div>
  );
};

export default FetchIntervalContainer;
