import React, { useEffect } from 'react'

export default function TooglePicture({data2}) {

    function Open(m, id) {
        const currentElememtId = document.getElementsByClassName('active')
        const parent = document.getElementById(m)
        currentElememtId[0].className = currentElememtId[0].className.replace('active', '')
        parent.classList.toggle('active')
        const all = document.getElementsByClassName('all')
        for (var k = 0; k < all.length; k++) {
            all[k].style.display = 'none'
        }
        document.getElementById(id).style.display = 'block'
    }
    return (
        <div className='mt-52 mb-20'>
            <div className='text-center mb-24'>
                <h3 className='text-5xl text-[#00467f] font-bold'>{data2.desc}</h3>
            </div>
            <div className='laptop:grid grid-cols-3 '>
                <div className='col-span-1'>
                    <ul>
                        <li className=''>
                            <div onClick={(e) => Open('parent1', 'province')} id='parent1' className='relative items-center active parent hover:drop-shadow-[20px] rounded-l-xl hover:transition-all ease-in-out delay-75 flex justify-start py-10 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                <span className='font-semibold text-2xl px-4'>{data2.number.number1}</span>
                                <span className='ml-8 text-2xl font-semibold max-w-[65%]'>{data2.title.til1}</span>
                            </div>
                        </li>
                        <li className=''>
                            <div onClick={(e) => Open('parent2', 'leangue')} id='parent2' className='items-center parent hover:drop-shadow-[20px] rounded-l-xl hover:transition-all ease-in-out delay-75 flex justify-start py-10 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                <span className='font-semibold text-2xl px-4'>{data2.number.number2}</span>
                                <span className='ml-8 text-2xl font-semibold max-w-[65%]'>{data2.title.til2}</span>
                            </div>
                        </li>
                        <li className=''>
                            <div onClick={(e) => Open('parent3',  'special')} id='parent3' className='items-center parent hover:drop-shadow-[20px] rounded-l-xl hover:transition-all ease-in-out delay-75 flex justify-start py-10 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                <span className='font-semibold text-2xl px-4'>{data2.number.number3}</span>
                                <span className='ml-8 text-2xl font-semibold max-w-[65%]'>{data2.title.til3}</span>
                            </div>
                        </li>
                        <li className=''>
                            <a className='hover:no-underline '>
                                <div onClick={(e) => Open('parent4', 'number4')} id='parent4' className='items-center parent hover:drop-shadow-[20px] rounded-l-xl hover:transition-all ease-in-out delay-75 flex justify-start py-10 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                    <span className='font-semibold text-2xl px-4'>{data2.number.number4}</span>
                                    <span className='ml-8 text-2xl font-semibold max-w-[65%]'>{data2.title.til4}</span>
                                </div>
                            </a>
                        </li>
                        <li className=''>
                            <a className='hover:no-underline '>
                                <div onClick={(e) => Open('parent5', 'number5')} id='parent5' className='items-center parent hover:drop-shadow-[20px] rounded-l-xl hover:transition-all ease-in-out delay-75 flex justify-start py-10 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                    <span className='font-semibold text-2xl px-4'>{data2.number.number5}</span>
                                    <span className='ml-8 text-2xl font-semibold max-w-[65%]'>{data2.title.til5}</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <div style={{ display: 'block' }} className='all' id='province'>
                        <img src={data2.src.src1} alt={data2.title.titl1}></img>
                    </div>
                    <div style={{ display: 'none' }} className='all' id='leangue'>
                        <img src={data2.src.src2} alt={data2.title.titl2}></img>
                    </div>
                    <div style={{ display: 'none' }} className='all' id='special'>
                        <img src={data2.src.src3} alt={data2.title.titl3}></img>
                    </div>
                    <div style={{ display: 'none' }} className='all' id='number4'>
                        <img src={data2.src.src4} alt={data2.title.titl4}></img>
                    </div>
                    <div style={{ display: 'none' }} className='all' id='number5'>
                        <img src={data2.src.src5} alt={data2.title.titl5}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
