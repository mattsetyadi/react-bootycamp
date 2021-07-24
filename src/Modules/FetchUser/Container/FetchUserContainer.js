import React, { useEffect, useState } from 'react';

import FetchUserComponent from '../Component/FetchUserComponent';
import axios from 'axios';

const FetchUserContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await axios.get(process.env.REACT_APP_USER_API);
    setUsers(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <FetchUserComponent users={users} loading={loading} />;
};

export default FetchUserContainer;
