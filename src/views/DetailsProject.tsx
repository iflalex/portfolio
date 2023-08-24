//React
import { useEffect, useState } from 'react';
//Router
import { useNavigate, useParams } from 'react-router-dom'
//Interfaces
import { ItemModel } from '@interfaces/Projects'
//Store
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setActive, setPictureActive } from 'src/store/features/ProjectsSlice';


export default function DetailsProject(): React.ReactElement {
  const navigate = useNavigate();

  const [item,setItem] = useState<ItemModel>();

  const dispatch = useAppDispatch();

  const itemActive:ItemModel[] = useAppSelector((state)=>{
    return state.projectsSlice.projects.items
  })
  const active:boolean = useAppSelector((state)=>{
    return state.projectsSlice.projects.active
  })
  const pictureActive:string = useAppSelector((state)=>{
    return state.projectsSlice.projects.pictureActive
  })


  const { name } = useParams();

  useEffect(()=>{
    const result = itemActive.find((item)=>item.name === name)
    result ? setItem(result) : navigate('*')
  },[setItem,itemActive,name,navigate])

  return (
    <div className='min-h-screen w-full flex justify-center p-10 relative'>
      <div className='max-w-max h-full flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-xl font-medium text-main'>{item?.name}</h1>
          <h2 className='text-lg'>développement {item?.category}</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          {
            item?.images.map((image,index)=>{
              return <div key={index} style={{background:`url('${image}') no-repeat center center / cover`}} className={`w-[240px] h-[240px] rounded-xl relative`}>
                <div title="Agrandir" onClick={()=>{dispatch(setPictureActive(image)); dispatch(setActive(!active))}} className='absolute bg-[rgba(255,69,8,0.5)] rounded-xl top-0 left-0 w-full h-full opacity-0 hover:lg:opacity-100 cursor-pointer flex justify-center items-center'>
                  <div style={{background:`url('https://i.goopics.net/0ypr92.png')  no-repeat center center / cover`}} className="xs:w-20 xs:h-20 h-16 w-16"  />
                </div>
              </div> 
            })
          }
        </div>
        <div onClick={()=>dispatch(setActive(!active))}className={`${active ? ' opacity-100 z-20 ' : ' opacity-0 z-[-1] '} absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex justify-center items-center`}>
          <img src={pictureActive} className='w-[80%] md:w-[700px]' alt="item detail" />
        </div>
        <p className='sm:w-[500px] w-[240px] text-center'>{item?.technologies}</p>
      </div>
    </div>
  )  
}
