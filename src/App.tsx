//React
import React from 'react';
//Router
import { Outlet } from 'react-router-dom';
//Components
import Header from './components/app/Header';

export default function App(): React.ReactElement {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}