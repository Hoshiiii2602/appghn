import React from 'react'
import SearchWork from '../SearchWork'
import QuickWorkContact from '../QuickWorkContact'
import InforWork from './InforWork'
import ToastMessage from '../../frames/ToastMessage'


export default function BlockOffiiceWork() {

    return (
        <div className='laptop:mt-40 mobile:mt-56'>

            <div className='tablet:-mx-20'>
                <SearchWork />
            </div>

            
            <div className='text-center relative'>


                <h3 className='text-5xl font-bold text-[#00467f] my-24'>
                    XEM VIỆC LÀM TẠI
                </h3>


                <div className='flex justify-center'>


                    <div className='bg-primary w-[380px] h-[60px] rounded-lg ml-4'>
                        <a className='w-[380px] h-[60px]' href=''>
                            <img
                                className='h-[40px] my-[10px] mx-auto'
                                src="//theme.hstatic.net/200000472237/1000829412/14/logo-filjob1.png?v=509"
                                alt="GHN Express">
                            </img>
                        </a>
                    </div>


                    <div className='bg-primary w-[380px] h-[60px] rounded-lg ml-4'>
                        <a className='w-[380px] h-[60px]' href='/pages/notification'>
                            <img
                                className='h-[40px] my-[10px] mx-auto'
                                src="//theme.hstatic.net/200000472237/1000829412/14/logo-filjob2.png?v=509"
                                alt="GHN Logistics">
                            </img>
                        </a>
                    </div>


                    <div className='bg-primary w-[380px] h-[60px] rounded-lg ml-4'>
                        <a className='w-[380px] h-[60px]' href='/pages/notification'>
                            <img
                                className='h-[40px] my-[10px] mx-auto'
                                src="//theme.hstatic.net/200000472237/1000829412/14/logo-filjob3.png?v=509"
                                alt="Scommerce">
                            </img>
                        </a>
                    </div>


                </div>
            </div>
            <div className='mt-20 tablet:flex relative'>

                <InforWork />
                <QuickWorkContact />


            </div>


            <ToastMessage />
        </div>
    )
}
