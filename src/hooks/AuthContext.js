import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };