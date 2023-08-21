//Components
import BurgerMenu from './BurgerMenu';




export default function Header(): React.ReactElement {
    
    return (
      <header>
        <div className="flex shadow-md h-20 w-full items-center gap-4 pl-5 md:pl-10">
            <BurgerMenu/>
            <p className='text-xl md:text-lg mt-[7px] md:mt-0'>Alexandre IFFLI</p>
        </div>
      </header>
    )
}
