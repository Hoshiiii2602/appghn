import React from 'react'
import RegistorForSale from './RegistorForSale'

export default function Sale() {
    return (
        <div className='tablet:grid grid-cols-2 mt-24'>


            <div className='col-span-1 tablet:mb-0 mobile:mb-6'>
                <p
                    className='text-primary font-bold text-7xl'>
                    NHẬN NGAY GIÁ TỐT<br></br> NHẤT - ƯU ĐÃI ĐẾN 40%</p>
                <p
                    className='mobile:text-xl tablet:text-[18px] font-bold mt-12'>
                    Shop hãy để lại thông tin; GHN sẽ liên hệ tư vấn ngay lập tức!</p>
                <p
                    className='mb-6 mt-4 mobile:text-xl tablet:text-[18px]'>
                    Bên cạnh đó, Shop có thể tìm hiểu thêm thông tin qua các kênh sau:</p>
                <p
                    className='mobile:text-xl tablet:text-[18px]'>
                    <span className='font-bold'>Hotline:</span> 1900636677</p>
                <p
                    className='mobile:text-xl tablet:text-[18px]'>
                    <span className='font-bold'>FanPage:</span>
                    <a
                        className='hover:text-primary hover:no-underline'
                        href='https://www.facebook.com/GHNExpress'>
                        <span>https://www.facebook.com/GHNExpress</span>
                    </a>
                </p>
                <p
                    className='mobile:text-xl tablet:text-[18px]'>
                    <span
                        className='font-bold'>
                        Email:
                    </span>
                    <a
                        className='hover:text-primary hover:no-underline'
                        href='/cham-soc-khach-hang'>
                        <span>
                            cskh@ghn.vn
                        </span>
                    </a>
                </p>
                <p
                    className='mt-6 mobile:text-xl tablet:text-[18px]'>
                    (*) Tuỳ theo số lượng đơn hàng</p>
            </div>


            <div className='col-span-1'>
                <RegistorForSale />
            </div>



        </div>
    )
}
