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
      <div className='absolute top-0 left-0 overflow-scroll xs:p-10 pt-10 pb-10  h-full w-full flex flex-col items-center'>
        <Projects {...props}/>
      </div>
     )
  
}
