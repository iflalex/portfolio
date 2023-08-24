//Store
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { setActive } from 'src/store/features/TransitionSlice'
//Interfaces
import TransitionModel from '@interfaces/Transition'

export default function BurgerMenu() {
  const transition:TransitionModel = useAppSelector((state)=>{
    return state.transitionSlice
  })
  const dispatch = useAppDispatch()
  const styleList:string = 'w-8 h-1 bg-white transition-all ease-linear rounded-full'


  return (
    <div className='lg:hidden flex flex-col gap-1 hover:cursor-pointer' onClick={()=>{dispatch(setActive(!transition.active))}}>
      <div className={`${styleList} ${transition.active ? 'rotate-45 translate-y-[10px]' : ''}`} ></div>
      <div className={`${styleList} ${transition.active ? 'translate-x-[-100px]' : ''}`}></div>
      <div className={`${styleList} ${transition.active ? 'rotate-[-45deg] translate-y-[-5.5px]' : ''}`}></div>
    </div>
  )
}
