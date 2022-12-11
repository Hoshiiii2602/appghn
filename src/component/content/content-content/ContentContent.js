import React from 'react'

export default function ContentContent() {
  return (
    <div className='mt-[50px] text-center laptop:container'>
      <div className='mt-[120px]'>
        <h1 className='text-[#00467f] text-5xl font-bold'>
          GIAO HÀNG NHANH HƠN 6 TIẾNG
        </h1>
        <p className='text-[#ccd0db] mt-20'>
          GHN giúp bạn giao hàng đến người nhận nhanh hơn 6 tiếng so với các đơn vị vận chuyển khác
        </p>
      </div>
      <div className='laptop:h-[548px] mt-28'>
        <video className='laptop:block mobile:hidden'
          autoPlay
          loop
          muted
          preload='auto'>
          <source type='video/mp4' src='../video/vid1.mp4'></source>
        </video>
        <video
          className='laptop:hidden mobile:block'
          autoPlay
          loop
          muted
          preload='auto'>
          <source type='video/mp4' src='../video/vid-mob.mp4'></source>
        </video>
      </div>
      <div className='flex justify-around mt-32'>
        <div>
          <img
            className='h-[50px] max-w-full'
            src="//theme.hstatic.net/200000472237/1000829412/14/icon-app1.png?v=491"
            alt="Top công ty giao <br>nhận hàng đầu VN">
          </img>
        </div>
        <div>
          <img
            className='h-[50px] max-w-full'
            src="//theme.hstatic.net/200000472237/1000829412/14/icon-app2.png?v=491"
            alt="Mạng lưới phủ sóng <br> 100% 63 tỉnh thành">
          </img>
        </div>
        <div>
          <img
            className='h-[50px] max-w-full'
            src="//theme.hstatic.net/200000472237/1000829412/14/icon-app3.png?v=491"
            alt="Giao hàng nhanh <br> Tỷ lệ hoàn hàng thấp">
          </img></div>
        <div>
          <img
            className='h-[50px] max-w-full'
            src="//theme.hstatic.net/200000472237/1000829412/14/icon-app4.png?v=491"
            alt="Hệ thống quản lý <br> trực tuyến 24/7">
          </img>
        </div>
      </div>
      <div className='flex tablet:justify-around  mt-6 ml-4'>
        <div>
          <p className='text-[#ccd0db]'>Top công ty giao<br></br>nhận hàng đầu VN</p>
        </div>
        <div>
          <p className='text-[#ccd0db]'>Mạng lưới phủ sóng<br></br>100% 63 tỉnh thành</p>
        </div>
        <div>
          <p className='text-[#ccd0db]'>Giao hàng nhanh<br></br>Tỷ lệ hoàn hàng thấp</p>
        </div>
        <div>
          <p className='text-[#ccd0db]'>Hệ thống quản lý<br></br>trực tuyến 24/7</p>
        </div>
      </div>
    </div>
  )
}
