import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='grid grid-cols-10 mt-20 items-start '>
      <div className='col-span-3'>
        <div className='grid grid-rows-2'>
          <div className='flex items-center'>
            <img
              className='w-[60px] border-2 shadow-xl mr-6'
              src='https://theme.hstatic.net/200000472237/1000829412/14/logo-footer.png?v=491'
              alt='GHN'>
            </img>
            <h4
              className='font-bold text-2xl leading-9'>
              TRẢI NGHIỆM TỐT HƠN VỚI<br></br>
              APP GHN EXPRESS
            </h4>
          </div>
          <div className='flex mt-6'>
            <a
              className='mr-6'
              href="https://apps.apple.com/us/app/ghn-express-giao-h%C3%A0ng-nhanh/id1203171490">
              <img
                src="https://file.hstatic.net/1000376681/file/ico_google_play_f448c837674141469d3a903348361c5b.svg"
                alt='GooglePlay'>
              </img>
            </a>
            <a
              href="https://apps.apple.com/us/app/ghn-express-giao-h%C3%A0ng-nhanh/id1203171490">
              <img
                src="https://file.hstatic.net/1000376681/file/icon_app_store_82f9b10bf8d14389bb8c27ec885aceed.svg"
                alt='AppleStore'>
              </img>
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-2 mt-2'>
        <h4 className='font-bold text-2xl'>
          KẾT NỐI VỚI GHN
        </h4>
        <div className='mt-6 flex'>
          <a href='https://www.facebook.com/GHNExpress/'>
            <div className='text-6xl'><ion-icon name="logo-facebook"></ion-icon></div>
          </a>
          <a href="https://www.instagram.com/ghnexpress/">
            <div className='text-6xl ml-4'><ion-icon name="logo-instagram"></ion-icon></div>
          </a>
          <a href="https://www.youtube.com/channel/UC41RMKT4CYK9LXXKtYPKD1w">
            <div className='text-6xl ml-4'>
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/2721159">
            <div className='text-6xl ml-4'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </a>
        </div>
      </div>
      <div className='col-span-2'>
        <h4 className='font-bold text-2xl my-2'>HỆ THỐNG BƯU CỤC GHN</h4>
        <button
          className=
          'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-4 p-3 z-[1] rounded-xl location'>
          <a
            className='hover:no-underline'
            href="http://ghn-express.myharavan.com/blogs/he-thong-buu-cuc">
            TÌM ĐỊA CHỈ GẦN BẠN
          </a>
        </button>
      </div>
      <div className='col-span-2'>
        <h4 className='font-bold text-2xl my-2'>ĐĂNG KÝ NHẬN TIN MỚI</h4>
        <div className='flex items-center w-[120%]'>
          <input placeholder='Vui lòng nhập email của bạn...'
            className='border-[1px] rounded-xl focus:outline-none border-[#a6a6a6]  mt-4 p-3 w-[120%]'></input>
          <button className='ml-4 mt-4 registor rounded-xl z-[1]'>GỬI</button>
        </div>
      </div>
    </div>
  )
}
