//React
import React from 'react'
//Router
import { NavLink } from 'react-router-dom'
//Interfaces
import LinksModel from '@interfaces/Links'

export default function Desktop(props:LinksModel) {
  return (
    <div className="hidden md:grid border-b h-14 w-full grid-cols-[repeat(2,_minmax(0,max-content))] content-center justify-between p-10">
      <p className='text-lg'>Alexandre IFFLI</p>
      <menu>
        <ul className={`flex gap-8`}>
          {props.links.map((item,index) => {
            return (
                <NavLink key={index} to={`/${index !== 0 ? item : ""}`} className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                    <li className='text-lg'>{item}</li>
                </NavLink>
            )
          })}
        </ul>
      </menu>
    </div>
  )
}

