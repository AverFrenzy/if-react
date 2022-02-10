import {useLocation, Navigate} from 'react-router-dom';

import React from 'react';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({children}) => {
  const location = useLocation();

  const {userName,userPassword} = useAuth()

  if (!userName && !userPassword) {
    return <Navigate to='/login' state={{from: location}}/>;
  }

  return children;
};

export default RequireAuth;