//Store
import { setActive, setError, setErrorMail, setErrorName, setLoading, setSuccess } from "src/store/features/ContactSlice"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
//Loader
import ReactLoading from 'react-loading';

export default function Message(): React.ReactElement {
  const dispatch = useAppDispatch();
  const active:Boolean = useAppSelector((state)=>{
    return state.contactSlice.active
  })
  const success: Boolean = useAppSelector((state)=>{
    return state.contactSlice.success
  })
  const error: Boolean = useAppSelector((state)=>{
    return state.contactSlice.error
  })
  const loading: Boolean = useAppSelector((state)=>{
    return state.contactSlice.loading
  })
  const errorName: Boolean = useAppSelector((state)=>{
    return state.contactSlice.errorName
  })
  const errorMail: Boolean = useAppSelector((state)=>{
    return state.contactSlice.errorMail
  })

  return (
    <div className={`${active ? 'opacity-100' : 'opacity-0 z-[-1]'} p-3 absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center items-center`}>
      <ReactLoading type={'spinningBubbles'} color={'white'} height={100} width={100} className={`${loading ? '' : 'hidden'}`}/>
      <div className={`${success && !loading ? '' : 'hidden'} shadow-xl bg-white rounded-xl p-5 flex flex-col gap-5`}>
        <p className='text-lg text-center'>Le mail a bien été envoyé.</p>
        <button 
          onClick={()=>{
            dispatch(setActive(false));
            dispatch(setSuccess(false));
            dispatch(setLoading(true));
          }} 
          className='rounded-md bg-[rgba(0,0,0,0.1)] pt-1 pb-1 text-green-500 font-medium'>
            Ok
        </button>
      </div>
      <div className={`${error && !loading ? '' : 'hidden'} shadow-xl bg-white rounded-xl p-5 flex flex-col gap-5`}>
        <p className='text-lg text-center'>Erreur lors de l'envoie.</p>
        <button 
          onClick={()=>{
            dispatch(setActive(false));
            dispatch(setError(false));
            dispatch(setLoading(true));
          }} 
          className='rounded-md bg-[rgba(0,0,0,0.1)] pt-1 pb-1 text-red-500 font-medium'>
            Ok
        </button>
      </div>

      <div className={`${errorName && !loading ? '' : 'hidden'} shadow-xl bg-white rounded-xl p-5 flex flex-col gap-5`}>
        <p className='text-lg text-center'>Le nom doit contenir au minimum 3 caractères.</p>
        <button 
          onClick={()=>{
            dispatch(setActive(false));
            dispatch(setErrorName(false));
            dispatch(setLoading(true));
          }} 
          className='rounded-md bg-[rgba(0,0,0,0.1)] pt-1 pb-1 text-red-500 font-medium'>
            Ok
        </button>
      </div>
      <div className={`${errorMail && !loading ? '' : 'hidden'} shadow-xl bg-white rounded-xl p-5 flex flex-col gap-5`}>
        <p className='text-lg text-center'>Le mail est incorrect veuillez ressaisir.</p>
        <button 
          onClick={()=>{
            dispatch(setActive(false));
            dispatch(setErrorMail(false));
            dispatch(setLoading(true));
          }} 
          className='rounded-md bg-[rgba(0,0,0,0.1)] pt-1 pb-1 text-red-500 font-medium'>
            Ok
        </button>
      </div>
    </div>
  )
}
