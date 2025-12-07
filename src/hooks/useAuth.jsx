import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
//added
//addd
const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;