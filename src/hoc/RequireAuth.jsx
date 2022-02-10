import React from 'react';
import {connect} from 'react-redux';
import {useLocation, Navigate} from 'react-router-dom';


const RequireAuth = ({children, userName, userPassword}) => {
  const location = useLocation();

  if (!userName && !userPassword) {
    return <Navigate to='/login' state={{from: location}}/>;
  }

  return children;
};

const mapStateToProps = (state) => ({
  userName: state.userName,
  userPassword: state.userPassword,
});

export default connect(mapStateToProps)(RequireAuth);
