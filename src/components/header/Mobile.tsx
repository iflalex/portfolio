//Interfaces
import LinksModel from '@interfaces/Links'
//Components
import BurgerMenu from './BurgerMenu'

export default function Mobile(props:LinksModel) {
  return (
    <div className="flex md:hidden border-b h-20 w-full items-center gap-4 pl-5">
      <BurgerMenu/>
      <p className='text-xl'>Alexandre IFFLI</p>
    </div>
  )
}