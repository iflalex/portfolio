//Interfaces
import LinksModel from "@interfaces/Links";
import TransitionModel from '@interfaces/Transition'
//Router
import { NavLink } from "react-router-dom";
//Store
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { setActive } from "src/store/features/TransitionSlice";


export default function DrawerMenu(props:LinksModel) {

  const transition:TransitionModel = useAppSelector((state)=>{
    return state.transitionSlice
  })
  const dispatch = useAppDispatch()

  return (

    <div className={`md:static md:border-r-2 absolute z-30 h-full max-w-max md:pl-10 pl-6 pt-12 pr-20 md:bg-[rgba(0,0,0,0)] bg-white flex flex-col gap-10 transition-all ${transition.active ? 'left-0' : 'left-[-101%]'}`}>
      {props.links.map((item,index)=>{
        return <NavLink 
        key={index} to={`/${index !== 0 ? item : ""}`} 
        onClick={()=>{dispatch(setActive(!transition.active))}} 
        className={({ isActive }) => isActive ? "active" : ""}
        >
          <li className='text-xl'>{item}</li>
        </NavLink>
      })}
    </div>
    
  )
}
