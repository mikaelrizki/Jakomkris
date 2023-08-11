import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return (
            <Navigate to="/" replace={true} />
        )
    }
    else {
        return (
            <Navigate to="/login" replace={true} />
        )
    }
};

export default RequireAuth;