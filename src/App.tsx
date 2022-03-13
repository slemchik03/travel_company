import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles/app.scss';

export const App = () => {

  return (
    <>
      <Outlet />
    </>
  )
}
