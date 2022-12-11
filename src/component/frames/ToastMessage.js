import React from 'react'
import Exclamation from './Icon'
import './toast.css'

export default function ToastMessage() {
    function blockToast () {
        
    }
  return (
    <div className='toast mobile:hidden border-[2px] flex text-white bg-yellow-400 rounded-xl items-center px-3 w-[350px] h-[60px]' id='toast'>
        <span className='text-5xl flex items-center'><Exclamation /></span>
        <p className='text-2xl ml-4 font-normal'>Ứng dụng đang trong quá trình xây dựng<br></br>Vui lòng liên hệ admin...</p>
    </div>
  )
}
