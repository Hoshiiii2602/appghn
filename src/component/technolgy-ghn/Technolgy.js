import React from 'react'
import InforGhn from '../frames/InforGhn'
import TechnolgyVideo from '../frames/TechnolgyVideo'
import './technolgy.css'

export default function Technolgy() {

  const src1 = "//theme.hstatic.net/200000472237/1000829412/14/web5sao.png?v=509"
  const src2 = "//theme.hstatic.net/200000472237/1000829412/14/appghn.png?v=509"
  const src3 = "//theme.hstatic.net/200000472237/1000829412/14/congketnoiapi.png?v=509"
  const data = {
    tab1: {
      title: "KHACHHANG.GHN.VN",
      desc: "Đặt đơn giao hàng nhanh chóng, tiết kiệm thời gian tối đa, theo dõi tình trạng đơn hàng và quản lý dòng tiền COD trong tầm tay với hệ thống quản lý trực tuyến 24/7."
    },
    tab2: {
      title: "APP GHN",
      desc: `Giao hàng dễ dàng, nhanh chóng , mọi lúc mọi nơi với App GHN . Tận hưởng những trải nghiệm tiện ích mượt mà cùng những ưu đãi hấp dẫn chỉ có riêng cho App GHN.
      Tải ứng dụng ngay!`
    },
    tab3: {
      title: "CỔNG KẾT NỐI API",
      desc: "Tích hợp công nghệ API có khả năng kết nối với hệ thống đơn hàng của các sàn thương mại điện tử và website bán hàng giúp tối ưu việc quản lý và kiểm soát các vấn đề trong quá trình giao nhận."
    },
  }
  return (
    <div className='mt-[260px] container'>
      <div className='tablet:grid grid-cols-2'>
        <div className='col-span-1 break-before-auto text-left'>
          <h3 className='text-6xl font-semibold'>NHANH HƠN VỚI GHN</h3>
          <p className='text-2xl font-[400] max-w-[455px] mt-16 leading-[24px]'>Sở hữu hệ thống băng tải phân loại hàng tự động 100% đầu tiên tại Việt Nam với năng suất 30.000 đơn/giờ, cùng hệ thống ứng dụng lên đơn trực tuyến thông minh, thao tác dễ dàng và nhanh chóng.</p>
          <p className='text-2xl font-[400] max-w-[455px] mt-12 leading-[24px]'>GHN đang là đơn vị tiên phong trong việc ứng dụng công nghệ vào các hoạt động vận hành và quản lý giúp cho việc giao nhận trở nên hiệu quả và nhanh chóng hơn, tạo sự gắn kết chặt chẽ giữa người gửi và người nhận.</p>
        </div>
        <div className='col-span-1 relative'>
          <div className='laptop:-mt-44'>
            <img className='technolgy z-[11] relative' src="//theme.hstatic.net/200000472237/1000829412/14/slide-app-image.png?v=509" alt="NHANH HƠN VỚI GHN"></img>
          </div>
        </div>
      </div>
      <div className='laptop:grid grid-cols-2 gap-2 tablet:-mx-24'>
        <div className='col-span-1 tablet:px-40 bg-[#f8f8f8] py-40'>
          <TechnolgyVideo data={src1} />
        </div>
        <div className='col-span-1 tablet:px-40 bg-[#f8f8f8] py-40'>
          <InforGhn data={data.tab1} />
          <a href='https://khachhang.ghn.vn/'>
            <button className=
              'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-16 p-3 py-3 z-[1] rounded-xl location laptop:w-[30%] text-white font-semibold hover:text-primary'
            >KHÁM PHÁ NGAY
            </button>
          </a>
        </div>
      </div>
      <div className='tablet:grid grid-cols-2 bg-[#f8f8f8] gap-2 tablet:-mx-24'>
        <div className='col-span-1 laptop:pl-40 bg-white py-40'>
          <InforGhn data={data.tab2} />
          <div className='flex mt-12'>
            <a className='mr-6' href="https://apps.apple.com/us/app/ghn-express-giao-h%C3%A0ng-nhanh/id1203171490">
              <img src="https://file.hstatic.net/1000376681/file/ico_google_play_f448c837674141469d3a903348361c5b.svg" alt='GooglePlay'></img>
            </a>
            <a href="https://apps.apple.com/us/app/ghn-express-giao-h%C3%A0ng-nhanh/id1203171490">
              <img src="https://file.hstatic.net/1000376681/file/icon_app_store_82f9b10bf8d14389bb8c27ec885aceed.svg" alt='AppleStore'></img>
            </a>
          </div>
        </div>
        <div className='col-span-1 laptop:px-40 bg-white imgTech2 py-40'>
          <TechnolgyVideo data={src2} />
        </div>
      </div>
      <div className='tablet:grid grid-cols-2 gap-2 tablet:-mx-24'>
        <div className='col-span-1 laptop:px-40 py-40 bg-[#f8f8f8]'>
          <TechnolgyVideo data={src3} />
        </div>
        <div className='col-span-1 tablet:px-40 py-40 bg-[#f8f8f8]'>
          <InforGhn data={data.tab3} />
          <a href='https://khachhang.ghn.vn/'>
            <button className=
              'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-16 p-3 py-3 z-[1] rounded-xl location laptop:w-[30%] text-white font-semibold hover:text-primary'
            >KHÁM PHÁ NGAY
            </button>
          </a>
        </div>
      </div>
      <div className='container py-48'>
        <iframe className='w-full laptop:h-[480px] tablet:h-[350px]' allow='autoplay' src="https://www.youtube.com/embed/_KaSh51s7Lg?autoplay=1&mute=1&enablejsapi=1" title="Khai Trương Hệ Thống Phân Loại Hàng Tự Động 100% | GHN Express | Full Official Video" frameBorder={0} />
      </div>
    </div>
  )
}
