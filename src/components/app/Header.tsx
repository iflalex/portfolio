// Router
import { NavLink } from 'react-router-dom'
// Types
import { useAppSelector } from 'src/store/hooks';

export default function Header(): React.ReactElement {
   
    const arrLinks: Array<string> = useAppSelector((state)=>{
        return state.linksName.names
    })
    
    
    return (
        <header className="h-14 w-full grid grid-cols-headerWelcome content-center justify-between p-10 fixed">
            <p>Alexandre IFFLI</p>
            <menu>
                <ul className={`grid grid-cols-[repeat(${arrLinks.length},_minmax(0,_max-content))] gap-8`}>
                    {arrLinks.map((item,index) => {
                        return (
                            <NavLink key={index} to={`/${index !== 0 ? item : ""}`} className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                                <li>{item}</li>
                            </NavLink>
                            
                        )
                    })}
                </ul>
            </menu>
        </header>
    )
}
