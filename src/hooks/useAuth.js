import {useContext} from 'react';
import {AuthContext} from '../hoc/AuthProvider';

const UseAuth = () => useContext(AuthContext)

export default UseAuth;