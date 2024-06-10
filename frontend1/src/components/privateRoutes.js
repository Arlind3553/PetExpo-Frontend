import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem('isAuth');
  if (!isAuth) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
}

export default PrivateRoutes