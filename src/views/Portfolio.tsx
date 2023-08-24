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
      <Projects {...props}/>
     )
  
}
