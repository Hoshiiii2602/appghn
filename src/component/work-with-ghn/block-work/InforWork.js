import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InformationRecruit from '../InformationRecruit'

export default function InforWork() {
    const [recruit, setRecruit] = useState({
        "nameWork": [],
        "location": []
    })
    useEffect(() => {
        axios('https://appghn.herokuapp.com/recruit').then(result => setRecruit(result.data))
    }, [])
    return (
        <div className='w-[85%] mx-10 text-center relative'>
            <picture>
                <source srcSet="//theme.hstatic.net/200000472237/1000829412/14/slide_blog_td_3.jpg?v=509"></source>
                <img src="//theme.hstatic.net/200000472237/1000829412/14/slide_blog_td_3.jpg?v=509" title="GHN liên tục tuyển dung" alt="GHN liên tục tuyển dung"></img>
            </picture>
            <ul className='mt-12 text-left'>
                {recruit.nameWork.map((infor, index) => {
                    return (
                        <li key={index} className="border-t-[1px] mb-1 last:border-b-[1px] justify-between border-dashed flex hover:border-t-[1px] hover:border-dashed hover:shadow-md hover:bg-[#ecf9f9]">
                            <span className='py-8 ml-20'>
                                <h3 className='mb-2'>{infor}</h3>
                                <p>--Hồ Chí Minh</p>
                            </span>
                            <div className='flex mr-6 mobile:mt-6 laptop:mt-0'>
                                <span>
                                    <p>Hạn nộp</p>
                                    <p>28/12/2022</p>
                                </span>
                                <div className='h-[25%] rounded-3xl px-4 flex items-center bg-primary'>Gấp</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className='py-4 w-[40%] border-[1px] mt-12 mb-12 hover:bg-[#00467f] text-[#00467f] hover:text-white'>Xem thêm</button>
            <InformationRecruit />
        </div>
    )
}
