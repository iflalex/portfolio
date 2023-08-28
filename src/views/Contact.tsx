//React
import { useEffect, useRef, useState } from 'react';
//EmailJs 
import emailjs from '@emailjs/browser';
//Interfaces
import {Mail} from '@interfaces/Contact';
//Store
import { useAppDispatch } from 'src/store/hooks';
import { setActive, setSuccess, setLoading, setErrorMail, setErrorName, setError } from 'src/store/features/ContactSlice';

export default function Contact() {
  const dispatch = useAppDispatch();
  const inputName = useRef<HTMLInputElement | null>(null)
  const inputMail = useRef<HTMLInputElement | null>(null)
  const inputObj = useRef<HTMLInputElement | null>(null)
  const areaMessage = useRef<HTMLTextAreaElement | null>(null)
  const [verify, setVerify] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [obj, setObj] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onSubmit:()=>void = ()=>{
    const serviceID = 'service_q7zezxs';
    const send:Mail = {
      data:{
        name:name,
        obj:obj,
        mail: mail,
        message:message
      },
      template_id:'template_xd4xpco'
    }
    const response:Mail = {
      data:{
        name:name,
        mail: mail,
        message:message
      },
      template_id:'template_h3fyhph'
    }  
    const publicKey = 'RXps1XIgtiGYmGbji';
    mailSend(serviceID,send,response,publicKey);
  }

  const mailSend = (serviceID:string,send:Mail,response: Mail,publicKey:string )=>{

    let regex:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    dispatch(setActive(true));

    if(!mail.match(regex)){
      dispatch(setLoading(false));
      dispatch(setErrorMail(true));
      return false; 
    }
    if(name.length < 3)
    {
      dispatch(setLoading(false));
      dispatch(setErrorName(true));
      return false;
    }

    emailjs.send(serviceID,send.template_id,send.data,publicKey)
    .then(()=>{
      mailRes(serviceID,response,publicKey)
    })
    .catch(()=>{reset();dispatch(setError(true));dispatch(setLoading(false));});
  }

  const mailRes = (serviceID:string,response:Mail,publicKey:string )=>{
    emailjs.send(serviceID,response.template_id,response.data,publicKey)
    .then(()=>{
      reset();
      dispatch(setLoading(false));
      dispatch(setSuccess(true));
    })
    .catch(()=>{reset();dispatch(setError(true));dispatch(setLoading(false));});
  }

  const reset = ()=>{
    setName('');
    setMail('');
    setObj('');
    setMail('');

    if(inputName.current !== null && inputMail.current !== null && inputObj.current !== null && areaMessage.current !== null){
      inputMail.current.value = "";
      inputName.current.value = "";
      inputObj.current.value = "";
      areaMessage.current.value = "";
    }
  }

  useEffect(()=>{
    return name.length !== 0 && obj.length !== 0 && mail.length !== 0 && message.length !== 0 ? setVerify(false) : setVerify(true)
  },[mail, name.length, mail.length, obj.length, message.length])
  

  return (
    <div className='flex flex-col gap-4' >
      <h2 className='text-xl mb-5 text-center font-medium'>Contactez moi !</h2>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="name">Nom</label>
        <input 
          type="text" 
          ref={inputName} 
          onChange={(e:React.FormEvent<HTMLInputElement>)=>setName(e.currentTarget.value)} 
          name="name" 
          className='w-full h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' 
        />
      </div>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="mail">E-mail</label>
        <input 
          type="text" 
          ref={inputMail} 
          onChange={
            (e:React.FormEvent<HTMLInputElement>)=>{
              setMail(e.currentTarget.value);
            }} 
          name="mail" 
          className='w-full h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' 
        />
      </div>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="object">Object</label>
        <input 
          ref={inputObj} 
          type="text" 
          name="obj" 
          onChange={(e:React.FormEvent<HTMLInputElement>)=>setObj(e.currentTarget.value)} 
          className='w-full h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' 
        />
      </div>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="message">Message</label>
        <textarea 
          ref={areaMessage} 
          name="message" 
          onChange={(e:React.FormEvent<HTMLTextAreaElement>)=>setMessage(e.currentTarget.value)} 
          className='w-full h-[200px] p-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' 
        />
      </div>
      <button 
        onClick={()=>{onSubmit()}} 
        disabled={verify} 
        className={`${verify ? 'disabled:opacity-50' : ''} sm:w-[300px] bg-main rounded-md p-2 text-white font-medium`}>
          Envoyer
        </button>
    </div>
  )
}
