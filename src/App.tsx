//React
import React from 'react';
//Router
import { Outlet } from 'react-router-dom';
//Components
import Header from './components/header/Header';
import DrawerMenu from './components/header/DrawerMenu';
import { useAppSelector } from './store/hooks';
import LinksModel from '@interfaces/Links';


export default function App(): React.ReactElement {
  
  const links:LinksModel = useAppSelector((state)=>{
    return state.linkSlice
  })

  return (
    <div className='h-screen grid grid-rows-[minmax(0,max-content),1fr]'>
      <Header/>
      <div className='relative'>
        <DrawerMenu {...links}/>
        <Outlet />
      </div>
    </div>
    
  )
}