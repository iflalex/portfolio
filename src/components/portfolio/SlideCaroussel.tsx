//Interfaces
import { CarousselModel } from "@interfaces/Caroussel";
import { PropsModel } from "@interfaces/Props";
import { useEffect } from "react";
//Store
import { setIndex } from 'src/store/features/CarousselSlice';
import { useAppDispatch } from "src/store/hooks";

export default function SlideCaroussel(props:PropsModel<CarousselModel>) {

  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-0 left-0 h-full min-w-full flex">
      {props.caroussel.itemsPicture.map((item, i) => 
        <div key={i} className={`w-[${props.caroussel.sizeContainer}] h-full`}>
          <img src='' alt={item} className="w-full h-full rounded-xl object-cover"/>
        </div>
      )}
    </div>
  )
}
