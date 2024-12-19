import { useState, useEffect } from 'react';

export default function useAuth(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Check for token in localStorage
        if (token) {
          setIsAuthenticated(true); // User is authenticated if token exists
        }
      }, []);

    
    return { isAuthenticated, setIsAuthenticated };
}
