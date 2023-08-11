import { useEffect, useState } from 'react';
import axios from 'axios';

const UseAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_KEY + "api/login");
                if (response.data.isAuthenticated) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.error('Authentication check failed:', error);
                setAuthenticated(false);
            }
        };
        checkAuthentication();
    }, []);

    return authenticated;
};

export default UseAuth;