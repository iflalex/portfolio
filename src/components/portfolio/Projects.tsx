//Interfaces
import {PropsModel} from '@interfaces/Props'
import { ProjectsModel } from '@interfaces/Projects'
//Components
import ItemProjects from './ItemProjects'

export default function Projects(props:PropsModel<ProjectsModel>) {

  return (
    <div className={`grid 2xl:grid-cols-[repeat(4,1fr)] xl:grid-cols-[repeat(3,1fr)] grid-cols-1 sm:grid-cols-2 gap-2`}>
      {
        props.projects.items.map((item,index)=>{
          return <ItemProjects key={index} {...item}/>
        })
      }

    </div>
  )
  

  
}
