import React, { useEffect } from 'react';
import { UserState } from '../contexts/userProvider';
import { useNavigate } from 'react-router-dom';

const Middleware = ({ children }) => {
  const { user } = UserState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Middleware component mounted');

    return () => {
      console.log('Middleware component unmounted');
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (!user) {
    console.log('User not authenticated. Redirecting to login.');
    navigate('/login');
    return null; // or render a loading indicator or message
  }

  console.log('User authenticated. Rendering children.');
  return <>{children}</>;
};

export default React.memo(Middleware);
