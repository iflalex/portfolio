//Interfaces
import { ItemModel } from "@interfaces/Projects";
//Router
import { Link } from "react-router-dom";



export default function ItemProjects(item:ItemModel) {

  return (
    <Link
      to="/Details" 
      state={item}
    >
      <div title={item.name} className={`xs:w-[300px] w-[240px] h-[300px] grid grid-rows-[minmax(0,max-content),1fr,minmax(0,max-content)] gap-3 bg-[rgba(0,0,0,0.13)] rounded-md pt-3 pb-3 relative`}>
        <div className="lg:flex justify-center items-center absolute top-0 left-0 w-full h-full transition-all cursor-pointer rounded-md opacity-0 hover:opacity-100 bg-[rgba(0,0,0,0.3)]">
          <div style={{background:`url('https://i.goopics.net/oxtuyu.png')  no-repeat center center / cover`}} className="xs:w-20 xs:h-20 h-16 w-16"  />
        </div>
        <p className="pl-3 text-center">{item.name}</p>
        <div style={{background:`url('${item.background}') no-repeat center center / cover`}}></div>
        <p className="pl-3">developpement {item.category}</p>
      </div>
    </Link>
  )
}
