export const isTokenExpired = () => {
    const currentTime = Date.now();
    const tokenExpiration = sessionStorage.getItem('tokenExpiration');
    return currentTime > parseInt(tokenExpiration) + 23 * 60 * 60 * 1000; // 23 Hours 
};