//React
import React from 'react'
//Store
import { useAppSelector } from '../store/hooks';
//interfaces
import {PropsModel} from '@interfaces/Props';
//Components
import Projects from 'src/components/portfolio/Projects';
import { ProjectsModel } from '@interfaces/Projects';


export default function Portfolio(): React.ReactElement {
    const props:PropsModel<ProjectsModel> = useAppSelector((state)=>{
      return state.projectsSlice
    })
    
    return (
      <div className='p-10 min-h-full flex flex-col items-center'>
        <h2 className='text-2xl text-center mb-10'>Présentation de mes projets réalisé.</h2>
        <Projects {...props}/>
      </div>
     )
  
}
