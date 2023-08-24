import React from 'react'


export default function Contact() {
  return (
    <div className='flex flex-col gap-4' >
      <h2 className='text-xl mb-5 text-center font-medium'>Contactez moi !</h2>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="mail">E-mail</label>
        <input type="text" name="mail" className='w-full h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' />
      </div>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="object">Object</label>
        <input type="text" name="object" className='w-full h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' />
      </div>
      <div className='text-lg flex flex-col gap-2 sm:w-[300px]'>
        <label htmlFor="message">Message</label>
        <textarea name="message" className='w-full h-[200px] p-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main'></textarea>
      </div>
      <button className='sm:w-[300px] bg-main rounded-md p-2 text-white font-medium'>Envoyer</button>
    </div>
  )
}
