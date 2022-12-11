import React from 'react'
import DeliveryProcess from './process-get-take/DeliveryProcess'
import Policy from './register/polyci/Policy'
import Price from './register/price/Price'
import Register from './register/Register'
import RegistorLogin from './registor-login/RegistorLogin'
import ServicePlus from './service-plus/ServicePlus'

export default function GhnEpress() {
  return (
    <div className='laptop:mt-36 mobile:mt-48'>
        <Register />
        <Policy />
        <Price />
        <ServicePlus />
        <DeliveryProcess />
        <RegistorLogin />
    </div>
  )
}
