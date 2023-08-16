//React
import React from 'react'
//Store
import { useAppSelector } from '../store/hooks';
//interfaces
import {PropsModel} from '@interfaces/Props';
//Components
import Caroussel from 'src/components/portfolio/Caroussel';
import { CarousselModel } from '@interfaces/Caroussel';


export default function Portfolio(): React.ReactElement {
    const props:PropsModel<CarousselModel> = useAppSelector((state)=>{
      return state.carousselSlice
    })
    
    return (
      <div className={`pt-10 pb-10 h-full grid grid-rows-[minmax(0,max-content),minmax(0,max-content),1fr] gap-6 justify-center`}>
        <h1 className='text-5xl text-center'>Portfolio</h1>
        <h2 className='text-2xl text-center'>Présentation de mes projets réalisé.</h2>
        <Caroussel {...props}/>
      </div>
     )
  
}
