//Components
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';




export default function Header(): React.ReactElement {
    const [path, setPath] = useState<string>();
    useEffect(()=>{
      let arrSplit = window.location.href.split('/');
      let currentPath = arrSplit[arrSplit.length -1]
      currentPath = currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
      setPath(currentPath);
    })
    return (
      <header className='z-40'>
        <div className="flex shadow-md h-20 w-full items-center gap-4 pl-5 lg:pl-10 bg-main">
            <BurgerMenu/>
            <p className='text-md lg:hidden lg:text-lg mt-2 lg:mt-0 font-medium text-white'>{path ? path : 'Biographie'}</p>
            <p className='hidden lg:block text-md lg:text-lg mt-2 lg:mt-0 font-medium text-white'>Alexandre IFFLI</p>
        </div>
      </header>
    )
}
