import React, { useEffect } from 'react'
import './price.css'

export default function Price() {

    useEffect(() => {
        const image2 = document.getElementsByClassName('img2')
        const image1 = document.getElementsByClassName('img1')
        const parent = document.getElementsByClassName('parent')
        for (var j = 0; j < parent.length; j++) {
            if (parent[j].classList.contains('active')) {
                image1[j].style.display = 'none'
                image2[j].style.display = 'block'
            }

        }
    }, [])
    function Open(m, n, f, id) {
        const currentElememtId = document.getElementsByClassName('active')
        const parent = document.getElementById(m)
        const img1 = document.getElementById(n)
        const img2 = document.getElementById(f)
        currentElememtId[0].className = currentElememtId[0].className.replace('active', '')
        parent.classList.toggle('active')
        const image2 = document.getElementsByClassName('img2')
        const image1 = document.getElementsByClassName('img1')
        const all = document.getElementsByClassName('all')
        for (var k = 0; k < all.length; k++) {
            all[k].style.display = 'none'
        }
        for (var i = 0; i < image2.length; i++) {
            image1[i].style.display = 'block'
            image2[i].style.display = 'none'
        }
        if (parent.classList.contains('active')) {
            img1.style.display = 'none'
            img2.style.display = 'block'
        }
        document.getElementById(id).style.display = 'block'
    }
    return (
        <div className='mt-52 mb-20'>
            <div className='text-center mb-24'>
                <h3 className='text-5xl text-[#00467f] font-bold'>BẢNG GIÁ DỊCH VỤ</h3>
            </div>
            <div className='laptop:grid grid-cols-3 '>
                <div className='col-span-1'>
                    <ul>
                        <li className=''>
                            <div onClick={(e) => Open('parent1', 'i1', 'i2', 'province')} id='parent1' className='h-[66px]  relative items-center active parent hover:drop-shadow-[20px] hover:transition-all ease-in-out delay-75 flex justify-start py-8 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                <span className='w-[25px] h-[25px]'>
                                    <img id='i1' alt='hello' className='img1 max-w-full w-[25px] h-[25px]' src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_ic1.png?v=491"></img>
                                    <img id='i2' alt='hello' className='img2 max-w-full w-[25px] h-[25px]' src="///theme.hstatic.net/200000472237/1000829412/14/sv_price_icw1.png?v=491"></img>
                                </span>
                                <span className='ml-8 text-3xl font-semibold'>Bảng giá nội tỉnh</span>
                            </div>
                        </li>
                        <li className=''>
                            <div onClick={(e) => Open('parent2', 'i3', 'i4', 'leangue')} id='parent2' className='items-center parent hover:drop-shadow-[20px] hover:transition-all ease-in-out delay-75 flex justify-start py-8 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                <span className='w-[25px] h-[25px]'>
                                    <img id='i3' alt='hello' className='img1 max-w-full w-[25px] h-[25px]' src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_ic1.png?v=491"></img>
                                    <img id='i4' alt='hello' className='img2 max-w-full w-[25px] h-[25px]' src="///theme.hstatic.net/200000472237/1000829412/14/sv_price_icw1.png?v=491"></img>
                                </span>
                                <span className='ml-8 text-3xl font-semibold'>Bảng giá nội vùng</span>
                            </div>
                        </li>
                        <li className=''>
                            <div onClick={(e) => Open('parent3', 'i5', 'i6', 'special')} id='parent3' className='items-center parent hover:drop-shadow-[20px] hover:transition-all ease-in-out delay-75 flex justify-start py-8 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                <span className='w-[25px] h-[25px]'>
                                    <img id='i5' alt='hello' className='img1 max-w-full w-[25px] h-[25px]' src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_ic1.png?v=491"></img>
                                    <img id='i6' alt='hello' className='img2 max-w-full w-[25px] h-[25px]' src="///theme.hstatic.net/200000472237/1000829412/14/sv_price_icw1.png?v=491"></img>
                                </span>
                                <span className='ml-8 text-3xl font-semibold'>Bảng giá liên vùng đặc biệt</span>
                            </div>
                        </li>
                        <li className=''>
                            <a href='/price/view-detail' className='hover:no-underline '>
                                <div onClick={(e) => Open('parent4', 'i7', 'i8', e)} id='parent4' className='items-center parent hover:drop-shadow-[20px] hover:transition-all ease-in-out delay-75 flex justify-start py-8 border-t-[1px] hover:bg-[#00467f] hover:text-white'>
                                    <span className='w-[25px] h-[25px]'>
                                        <img id='i7' alt='hello' className='img1 max-w-full w-[25px] h-[25px]' src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_ic1.png?v=491"></img>
                                        <img id='i8' alt='hello' className='img2 max-w-full w-[25px] h-[25px]' src="///theme.hstatic.net/200000472237/1000829412/14/sv_price_icw1.png?v=491"></img>
                                    </span>
                                    <span className='ml-8 text-3xl font-semibold'>Xem bảng giá chi tiết</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <div style={{ display: 'block' }} className='all' id='province'>
                        <img src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_banner1.jpg?v=491" alt="Bảng giá nội tỉnh"></img>
                    </div>
                    <div style={{ display: 'none' }} className='all' id='leangue'>
                        <img src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_banner2.jpg?v=491" alt="Bảng giá nội vùng"></img>
                    </div>
                    <div style={{ display: 'none' }} className='all' id='special'>
                        <img src="//theme.hstatic.net/200000472237/1000829412/14/sv_price_banner4.jpg?v=491" alt="Bảng giá vùng đặc biệt"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
