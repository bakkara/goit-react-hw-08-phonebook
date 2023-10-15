import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './Header/Header';
import { Suspense } from 'react';

export const LayoutContainer = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 15px 15px;
    flex-direction: column;
    max-width: 1200px;
    gap: 16px;
    `;



export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};