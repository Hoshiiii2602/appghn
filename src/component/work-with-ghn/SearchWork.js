import React from 'react'

export default function SearchWork() {
    return (
        <div className='relative flex h-full'>
            <picture>
                <source srcSet="//theme.hstatic.net/200000472237/1000829412/14/bg-head-tuyendung.jpg?v=509"></source>
                <img src="//theme.hstatic.net/200000472237/1000829412/14/bg-head-tuyendung.jpg?v=509" alt="Liên hệ"></img>
            </picture>
            <div className='w-full h-full mobile:text-center laptop:text-left absolute'>
                <p className='tablet:mt-[8%] mobile:mt-[3%] laptop:ml-[30%] tracking-wide text-white font-bold laptop:text-6xl tablet:text-4xl'>VIỆC BAO LA - CHỌN THẢ GA !</p>
                <div className='tablet:mt-20 text-center overlayInput py-8 rounded-lg m-auto tablet:max-w-[80%]'>
                    <form>
                        <input placeholder='Nhập chức danh,công việc,vị trí,..' className='pl-4 tablet:py-4 mobile:py-2 focus:outline-none tablet:w-[65%] mr-4 rounded-lg'></input>
                        <select className='tablet:py-4 mobile:py-2 focus:outline-none w-[14%] mr-4' id='city'>
                            <option value=''>--Chọn khu vực--</option>
                        </select>
                        <button className=
                            'border-[1px] tablet:py-4 mobile:py-2 tablet:w-[15%] hover:border-primary border-primary rounded-xl workGhn  font-semibold hover:text-primary'
                        >TÌM VIỆC</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
