import React from 'react'

export default function DescLocation() {
    return (
        <div className='tablet:hidden mobile:hidden laptop:block'>
            <div className='border-[3px] border-t-[#7d7d7d] mt-9 w-[6%]'></div>
            <div className='mt-6'>
                <ul>
                    <li className='flex mb-2'>
                        <p className='font-bold'> <ion-icon name="location-outline"></ion-icon>
                            Trụ sở chính:</p>
                        <span> <p className='ml-1'>405/15 Xô Viết Nghệ Tĩnh, Phường 24,</p>
                            <p className='-ml-36'> Quận Bình Thạnh, TP HCM</p></span>
                    </li>
                    <li className='flex mb-2'>
                        <p className='font-bold'><ion-icon name="mail-outline"></ion-icon> Email: </p>
                        <p className='font-normal ml-1'> cskh@ghn.vn</p>
                    </li>
                    <li className='flex mb-2'>
                        <p className='font-bold'><ion-icon name="call-outline"></ion-icon> Hotline:</p>
                        <p>1900 636677</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
