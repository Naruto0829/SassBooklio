import React from 'react';
import firebaseApp from "../services/firebase";

const AuthContext = React.createContext(firebaseApp);

export default AuthContext;
