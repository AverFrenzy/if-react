import React, {createContext, useState} from 'react';


export const AuthContext = createContext(null);


export function AuthProvider({children}) {

  const [userName, setUserName] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const handleLogInInfo = (userAccName, userAccPas, cb) => {
    setUserName(userAccName)
    setUserPassword(userAccPas)
    cb()
  };

  const handleLogOutInfo = (cb) => {
    setUserName(null);
    setUserPassword(null);
    cb();
  };

  const value = {userName, userPassword, handleLogInInfo, handleLogOutInfo};


  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;

}
