//Store
import { useAppSelector } from 'src/store/hooks';
//Interfaces
import LinksModel from "@interfaces/Links"
//Components
import Desktop from './Desktop';
import Mobile from './Mobile';




export default function Header(): React.ReactElement {

    const links: LinksModel = useAppSelector((state)=>{
        return state.linkSlice
    })
    
    return (
      <header>
          <Desktop {...links}/>
          <Mobile {...links}/>
      </header>
    )
}
