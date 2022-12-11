import React from 'react'
import Contact from './contact/Contact'
import Desc from './Desc'

export default function Footer() {

  return (
    <div className='bg-[#fafafa] pt-12 px-48'>
      <Desc />
      <div className='laptop:block mobile:hidden tablet:hidden'>
        <Contact />
      </div>
    </div>
  )
}
