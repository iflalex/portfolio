//Interfaces
import {PropsModel} from '@interfaces/Props'
import { ProjectsModel } from '@interfaces/Projects'
//Components
import ItemProjects from './ItemProjects'

export default function Projects(props:PropsModel<ProjectsModel>) {
  const sizeContainer:number = props.caroussel.sizeContainer;

  return (
    <div className={`grid grid-cols-[repeat(4,1fr)] gap-2`}>
      {
        props.caroussel.itemsPicture.map((item,index)=>{
          const props:{item:string,index:number,sizeContainer:number} = {item, index, sizeContainer}
          return <ItemProjects {...props}/>
        })
      }

    </div>
  )
  

  
}
