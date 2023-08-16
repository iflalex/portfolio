//Interfaces
import {PropsModel} from '@interfaces/Props'
import { CarousselModel } from '@interfaces/Caroussel'
//Components
import SlideCaroussel from './SlideCaroussel'
//Assets
import Arrow from '../../assets/fleche-vers-le-bas.png'

export default function Caroussel(props:PropsModel<CarousselModel>) {

  //useEffect(()=>{
    //if(props.caroussel){
      //setItemsPicture(props.caroussel.itemsPicture)
    //}
  //},[props.caroussel])
  
  return (
    <div id="Caroussel" className={`w-[${props.caroussel.sizeContainer}] relative overflow-hidden`}>
      <div id="leftSlide" className='flex items-center absolute top-0 left-8 h-full'>
        <button className="rounded-full w-12 h-12 bg-[rgba(0,0,0,0.3)] pr-[5px] flex items-center justify-center">
          <img src={Arrow} className="w-8 h-8 rotate-[90deg]" alt="arrowSlider" />
        </button>
      </div>
      <div id="index" className='flex justify-center gap-3 absolute bottom-10 left-0 w-full'>
        {
          props.caroussel.itemsPicture.map((item:string)=>{
            return (
              <button key={item} className="rounded-full w-3 h-3 bg-[rgba(0,0,0,0.3)]"></button>
            )
          })
        }
      </div>
      <div id="rightSlide" className='flex items-center absolute top-0 right-8 h-full'>
        <button className="rounded-full w-12 h-12 bg-[rgba(0,0,0,0.3)] pl-[5px] flex items-center justify-center">
          <img src={Arrow} className="w-8 h-8 rotate-[-90deg]" alt="arrowSlider" />
        </button>
      </div>

     <SlideCaroussel {...props}/>
    </div>
  )
  

  
}
