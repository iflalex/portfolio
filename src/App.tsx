//React
import React from 'react';
//Router
import { Outlet } from 'react-router-dom';
//Components
import Header from './components/header/Header';
import DrawerMenu from './components/header/DrawerMenu';
import { useAppSelector } from './store/hooks';
import LinksModel from '@interfaces/Links';
import TransitionModel from '@interfaces/Transition';


export default function App(): React.ReactElement {
  
  const links:LinksModel = useAppSelector((state)=>{
    return state.linkSlice
  })
  const transition:TransitionModel = useAppSelector((state)=>{
    return state.transitionSlice
  })

  return (
    <div className='min-h-screen grid grid-rows-[minmax(0,max-content),1fr]'>
      <Header />
      <div className='md:static relative md:flex'>
        <div className={`md:hidden absolute top-0 left-0 h-full w-full transition-all ${transition.active ? 'bg-[rgba(0,0,0,0.6)] z-20' : 'bg-none z-0'}`}></div>
        <DrawerMenu {...links}/>
        <Outlet />
      </div>
    </div>
    
  )
}