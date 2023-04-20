import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import HeaderNavBar from '../component/HeaderNavBar';
import { useAuth } from '../context/AuthContext';

const MainContainer = ({ children }) => {
  return (
    <div className="main_container">
      {children}
    </div>
  )
}

const ProtectedPage = () => {
  return (
    <>
      <HeaderNavBar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}

const Main = () => {
  const authContext = useAuth();
  return (
    <> {authContext.token ? <ProtectedPage /> : <Navigate to="/account/login" />} </>
  )
}

export default Main;