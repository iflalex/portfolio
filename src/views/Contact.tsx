import React from 'react'


export default function Contact() {
  return (
    <div className='flex flex-col gap-4' >
      <h2 className='text-xl mb-5 text-center font-medium'>Contactez moi !</h2>
      <div className='text-lg flex flex-col gap-2'>
        <label htmlFor="mail">E-mail</label>
        <input type="text" name="mail" className='w-[300px] h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' />
      </div>
      <div className='text-lg flex flex-col gap-2'>
        <label htmlFor="object">Object</label>
        <input type="text" name="object" className='w-[300px] h-[40px] pl-3 pr-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main' />
      </div>
      <div className='text-lg flex flex-col gap-2'>
        <label htmlFor="message">Message</label>
        <textarea name="message" className='w-[300px] h-[200px] p-3 bg-[rgba(0,0,0,0.1)] rounded-sm focus:outline-main'></textarea>
      </div>
      <button className='bg-main rounded-md p-2 text-white font-medium'>Envoyer</button>
    </div>
  )
}
