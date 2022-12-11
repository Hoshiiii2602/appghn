import React from 'react'

export default function FrPolicy({ data }) {
    return (
        <div
            className='laptop:grid grid-cols-3 laptop:ml-16  text-center bg-[#fff] mt-24'>
            <div
                className=
                'hover:text-white m-auto mobile:mb-6 laptop:mb-0 polyci relative col-span-1 bg-white tablet:w-[370px] pb-8 border-[1px] rounded-b-[40px] hover:bg-gradient-to-t from-[#005493] to-[#00467f] rounded-tl-[40px] shadow-lg'>
                <div
                    className='w-[67px] m-auto bg-[#edf7fd] rounded-b-[22px] rounded-tl-[22px] mt-16 h-[67px]'>
                    <img
                        className='w-[35px] m-auto pt-6 max-w-full'
                        src={data.src.src1}>
                    </img>
                </div>
                <div className='mt-8 '>
                    <h3
                        className='text-[#00467f] max-w-[85%] m-auto free text-3xl '>
                        {data.title.til1}
                    </h3>
                    <p
                        className='break-before-auto mx-16 mt-10 font-light leading-[30px] text-[1.7rem]'>
                        {data.desc.desc1}
                    </p>
                </div>
            </div>
            <div
                className=
                'hover:text-white m-auto mobile:mb-6 laptop:mb-0 polyci col-span-1 bg-white tablet:w-[370px] pb-8 border-[1px] rounded-b-[40px] hover:bg-gradient-to-t from-[#005493] to-[#00467f] rounded-tl-[40px] shadow-lg'>
                <div
                    className='relative w-[67px] m-auto bg-[#edf7fd] rounded-b-[22px] rounded-tl-[22px] mt-24 h-[67px]'>
                    <img
                        className='w-[35px] m-auto pt-6 max-w-full'
                        src={data.src.src2}>
                    </img>
                </div>
                <div className='mt-8'>
                    <h3
                        className='text-[#00467f] max-w-[85%] m-auto free text-3xl '>
                        {data.title.til2}
                    </h3>
                    <p
                        className='break-before-auto mx-16 mt-10 font-light leading-[30px] text-[1.7rem]'>
                        {data.desc.desc2}
                    </p>
                </div>
            </div>
            <div
                className=
                'hover:text-white m-auto polyci col-span-1 bg-white tablet:w-[370px] pb-8 border-[1px] rounded-b-[40px] hover:bg-gradient-to-t from-[#005493] to-[#00467f] rounded-tl-[40px] shadow-lg'>
                <div
                    className=
                    'relative w-[67px] m-auto bg-[#edf7fd] rounded-b-[22px] rounded-tl-[22px] mt-16 h-[67px]'>
                    <img
                        className='w-[35px] m-auto pt-6 max-w-full'
                        src={data.src.src3}>

                    </img>
                </div>
                <div className='mt-8'>
                    <h3
                        className='text-[#00467f] max-w-[85%] m-auto free text-3xl'>
                        {data.title.til3}
                    </h3>
                    <p
                        className='break-all mx-16 mt-10 font-light leading-[30px] text-[1.7rem]'>
                        {data.desc.desc3}
                    </p>
                </div>
            </div>
        </div>
    )
}
