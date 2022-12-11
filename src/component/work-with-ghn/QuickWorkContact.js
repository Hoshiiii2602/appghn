import React from 'react'
import ModalKvp from './ModalKvp';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function QuickWorkContact() {
    return (
        <div className='laptop:w-[30%] pr-6 items-start'>
            <div className='sticky top-[90px]'>
                <ul className='mb-20'>
                    <p className='bg-[#00476f] text-3xl font-bold text-white text-center py-4'>XEM VIỆC NHANH</p>
                    <ul className='ml-4'>
                        <a className='hover:no-underline hover:cursor-pointer h-full w-full modalKvp' href='/pages/block/office'><li className='list-disc list-inside text-[#00476f] text-2xl py-4 border-b-2'>Khối văn phòng</li></a>
                        <ModalKvp />
                        <a className='hover:no-underline hover:cursor-pointer h-full w-full' href='/pages/notification'><li className='list-disc list-inside text-[#00476f] text-2xl py-4 border-b-2'>Khối công nghệ</li></a>
                        <a className='hover:no-underline hover:cursor-pointer h-full w-full' href='/pages/notification'><li className='list-disc list-inside text-[#00476f] text-2xl py-4 border-b-2'>Khối vận hành</li></a>
                        <a className='hover:no-underline hover:cursor-pointer h-full w-full' href='/pages/notification'><li className='list-disc list-inside text-[#00476f] text-2xl py-4 border-b-2'>Khối kinh doanh</li></a>
                        <a className='hover:no-underline hover:cursor-pointer h-full w-full' href='/pages/notification'> <li className='list-disc list-inside text-[#00476f] text-2xl py-4 border-b-2'>Làm việc bán thời gian</li></a>
                    </ul>
                </ul>
                <div className='relative -mx-4 bg-[#ffffff]'>
                    <div className='border-l-4 border-[#00467f] '>
                        <h3 className='text-3xl font-bold pl-4'>KẾT NỐI VỚI CHÚNG TÔI</h3>
                    </div>
                    <ul className='flex flex-wrap mt-6'>
                        <li className='bg-[#f9f9fb] w-[30%] text-center py-[12px] m-[2px]'>
                            <a className='w-[52px] hover:text-primary hover:no-underline h-[46px]' href="https://www.facebook.com/tuyendunggiaohangnhanh/">
                                <FaFacebookSquare className='h-[22px] w-[24px]' style={{ margin: 'auto' }} />
                                <span className='text-[7px]'>GHN EXPRESS</span>
                            </a>
                        </li>
                        <li className='bg-[#f9f9fb] w-[30%] text-center py-[12px] m-[2px]'>
                            <a className='w-[52px] hover:text-primary hover:no-underline h-[46px]' href="https://www.facebook.com/ezjob.vn/">
                                <FaFacebookSquare className='h-[22px] w-[24px]' style={{ margin: 'auto' }} />
                                <span className='text-[7px] uppercase'>EzJob</span>
                            </a>
                        </li>
                        <li className='bg-[#f9f9fb] w-[30%] text-center py-[12px] m-[2px]'>
                            <a className='w-[52px] hover:text-primary hover:no-underline h-[46px]' href="https://www.linkedin.com/company/scommerce.asia/">
                                <FaLinkedinIn className='h-[22px] w-[24px]' style={{ margin: 'auto' }} />
                                <span className='text-[7px] uppercase'>Scommerce</span>
                            </a>
                        </li>
                        <li className='bg-[#f9f9fb] w-[30%] text-center py-[12px] m-[2px]'>
                            <a className='w-[52px] hover:text-primary hover:no-underline h-[46px]' href="https://www.instagram.com/tuyen_dung_ghn/">
                                <FaInstagram className='h-[22px] w-[24px]' style={{ margin: 'auto' }} />
                                <span className='text-[7px] uppercase'>GHN Express</span>
                            </a>
                        </li>
                        <li className='bg-[#f9f9fb] w-[30%] text-center py-[12px] m-[2px]'>
                            <a className='w-[52px] hover:text-primary hover:no-underline h-[46px]' href="https://www.youtube.com/channel/UC41RMKT4CYK9LXXKtYPKD1w">
                                <FaYoutube className='h-[22px] w-[24px]' style={{ margin: 'auto' }} />
                                <span className='text-[7px] uppercase'>GHN Express</span>
                            </a>
                        </li>
                        <li className='bg-[#f9f9fb] w-[30%] text-center py-[12px] m-[2px]'>
                            <a className='w-[52px] hover:text-primary hover:no-underline h-[46px]' href="https://www.linkedin.com/company/giaohangnhanh-vn/">
                                <FaLinkedinIn className='h-[22px] w-[24px]' style={{ margin: 'auto' }} />
                                <span className='text-[7px] uppercase'>GHN Express</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
