// RedirectIfAuthenticated.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo?: string;
}

const RedirectIfAuthenticated: React.FC<RedirectIfAuthenticatedProps> = ({ 
  children, 
  isAuthenticated, 
  redirectTo = '/dashboard' 
}) => {
  return isAuthenticated ? <Navigate to={redirectTo} replace /> : <>{children}</>;
};

export default RedirectIfAuthenticated;