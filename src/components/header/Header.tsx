//Components
import BurgerMenu from './BurgerMenu';




export default function Header(): React.ReactElement {
    
    return (
      <header className='z-40'>
        <div className="flex shadow-md h-20 w-full items-center gap-4 pl-5 lg:pl-10 bg-main">
            <BurgerMenu/>
            <p className='text-lg mt-2 lg:mt-0 font-medium text-white'>Alexandre IFFLI</p>
        </div>
      </header>
    )
}
