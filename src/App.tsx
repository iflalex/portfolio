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
    <div className='h-screen grid grid-rows-[minmax(0,max-content),1fr]'>
      <Header />
      <div className='lg:static relative lg:flex'>
        <div className={`lg:hidden absolute top-0 left-0 h-full w-full transition-all ${transition.active ? 'bg-[rgba(0,0,0,0.6)] z-20' : 'bg-none z-0'}`}></div>
        <DrawerMenu {...links}/>
        <div className='w-full h-full relative'>
          <div className='absolute top-0 left-0 overflow-scroll p-10 pt-10 pb-10  h-full w-full flex flex-col items-center'>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
    
  )
}