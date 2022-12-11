import React from 'react'
import './policy.css'

export default function Policy() {

    return (
        <div className='laptop:grid grid-cols-3 ml-16 text-center bg-[#fff] mt-24'>
            <div className='hover:text-white polyci relative col-span-1 bg-white mobile:w-[86%] laptop:w-[370px] h-[370px] border-[1px] rounded-b-[40px] hover:bg-gradient-to-t from-[#005493] to-[#00467f] rounded-tl-[40px] shadow-lg'>
                <div className='w-[67px] m-auto bg-[#edf7fd] rounded-b-[22px] rounded-tl-[22px] mt-16 h-[67px]'>
                    <img className='w-[35px] m-auto pt-6 max-w-full' src="//theme.hstatic.net/200000472237/1000829412/14/cp_advantages1.png?v=491"></img>
                </div>
                <div className='mt-10 '>
                    <h3 className='text-[#00467f] free text-3xl'>MIỄN PHÍ LẤY HÀNG</h3>
                    <p className='break-all mx-16 mt-16 font-light leading-[30px] text-[1.7rem]'>GHN sẽ không thu phí lấy hàng cho các đơn hàng nhân viên giao nhận đến tận nơi để nhận hàng.</p>
                </div>
            </div>
            <div className='hover:text-white polyci col-span-1 bg-white mobile:w-[86%] laptop:w-[370px] mobile:mt-10 laptop:mt-0 mobile:h-[410px] laptop:h-[370px] border-[1px] rounded-b-[40px] hover:bg-gradient-to-t from-[#005493] to-[#00467f] rounded-tl-[40px] shadow-lg'>
                <div className='relative w-[67px] m-auto bg-[#edf7fd] rounded-b-[22px] rounded-tl-[22px] mt-16 h-[67px]'>
                    <img className='w-[35px] m-auto pt-6 max-w-full' src="//theme.hstatic.net/200000472237/1000829412/14/cp_advantages3.png?v=491"></img>
                </div>
                <div className='mt-10'>
                    <h3 className='text-[#00467f] free text-3xl'>MIỄN PHÍ GIAO LẠI</h3>
                    <p className='break-before-auto mx-16 mt-16 font-light leading-[30px] text-[1.7rem]'>Trong trường hợp giao hàng lần đầu không thành công, GHN sẽ miễn phí giao lại 2 lần tiếp theo trước khi hoàn trả hàng cho người gửi.</p>
                </div>
            </div>
            <div className='hover:text-white polyci col-span-1 bg-white mobile:w-[86%] laptop:w-[370px] mobile:mt-10 laptop:mt-0 h-[370px] border-[1px] rounded-b-[40px] hover:bg-gradient-to-t from-[#005493] to-[#00467f] rounded-tl-[40px] shadow-lg'>
                <div className='relative w-[67px] m-auto bg-[#edf7fd] rounded-b-[22px] rounded-tl-[22px] mt-16 h-[67px]'>
                    <img className='w-[35px] m-auto pt-6 max-w-full' src="//theme.hstatic.net/200000472237/1000829412/14/cp_advantages4.png?v=491"></img>
                </div>
                <div className='mt-10'>
                    <h3 className='text-[#00467f] free text-3xl'>CHIẾT KHẤU KHI NẠP GHN XU</h3>
                    <p className='break-all mx-16 mt-16 font-light leading-[30px] text-[1.7rem]'>Là hình thức thanh toán trả trước; nạp GHN Xu để được hoàn tiền vào ví lên đến 6% số tiền đã nạp.</p>
                </div>
            </div>
        </div>
    )
}
