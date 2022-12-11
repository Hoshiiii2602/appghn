import React, { useEffect, useState } from 'react'

export default function SlideInforGhn() {
    const [slides, setSlide] = useState([])
    let slideIndex = 1
    useEffect(() => {
        setSlide(document.getElementsByClassName("mySlides"))
    }, [slideIndex])

    function showSlides(n) {
        let i;
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }



    return (
        <div className='relative'>
            <button className="prev hover:text-primary" onClick={() => plusSlides(-1)}>❮</button>
            <button className="next hover:text-primary" onClick={() => plusSlides(1)}>❯</button>
            <div style={{ display: 'block' }} className='rounded-lg mySlides relative mt-64 fadeTrans'>
                <div className='bg-gradient-to-b people relative ml-8 rounded-lg m-auto from-[#e9f7ff] to-[#f3f2fd] py-32 px-24'>
                    <p className='m-auto break-before-auto text-4xl leading-[3.5rem] tracking-wide font-[350]'>GHN là một trong những đối tác vận chuyển uy tín của Shopee. Chúng tôi kỳ vọng với hệ thống phân loại hàng tự động, GHN không chỉ rút ngắn thời gian phân loại mà còn giúp cả người bán và người mua trên Shopee an tâm đơn hàng được giao nhanh hơn, an toàn hơn.</p>
                </div>
                <div className='flex mt-8 ml-8 items-center'>
                    <img className='w-[80px] rounded-full' src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar1.jpg?v=509" alt="Anh Trần Tuấn Anh"></img>
                    <span className='ml-4'>
                        <p className='text-3xl font-medium mb-4'>Anh Trần Tuấn Anh</p>
                        <p className='text-2xl font-light'>Giám Đốc Điều Hành Shopee Việt Nam</p>
                    </span>
                </div>
            </div>

            <div style={{ display: 'none' }} className='rounded-lg mySlides relative mt-64 fadeTrans'>
                <div className='bg-gradient-to-b people relative ml-8 rounded-lg m-auto from-[#e9f7ff] to-[#f3f2fd] py-32 px-24'>
                    <p className='m-auto break-before-auto text-4xl leading-[3.5rem] tracking-wide font-[350]'>GGHN là một trong những đối tác quan trọng của Sendo với mục tiêu phục vụ ngành thương mại điện tử và nền kinh tế số đang tăng trưởng vượt bậc, là cầu nối vận chuyển hàng hoá từ các nhà bán đến tay người tiêu dùng một cách an toàn và nhanh chóng.</p>
                </div>
                <div className='flex mt-8 ml-8 items-center'>
                    <img className='w-[80px] rounded-full' src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar4.jpg?v=509" alt="Anh Trần Hải Linh"></img>
                    <span className='ml-4'>
                        <p className='text-3xl font-medium mb-4'>Anh Trần Hải Linh</p>
                        <p className='text-2xl font-light'>Tổng Giám Đốc Sendo</p>
                    </span>
                </div>
            </div>

            <div style={{ display: 'none' }} className='rounded-lg mySlides relative mt-64 fadeTrans'>
                <div className='bg-gradient-to-b people relative ml-8 rounded-lg m-auto from-[#e9f7ff] to-[#f3f2fd] py-32 px-24'>
                    <p className='m-auto break-before-auto text-4xl leading-[3.5rem] tracking-wide font-[350]'>GHN là một đối tác quan trọng với Tiki, giúp hàng hoá trên Tiki đến được với nhiều tỉnh xa, thậm chí đến cả những huyện đảo. Điều này mang đến sự thuận lợi rất lớn cho khách hàng, xoá bỏ được các rào cản về địa lý. </p>
                </div>
                <div className='flex mt-8 ml-8 items-center'>
                    <img className='w-[80px] rounded-full' src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar3.jpg?v=509" alt="Anh Trần Ngọc Thái Sơn"></img>
                    <span className='ml-4'>
                        <p className='text-3xl font-medium mb-4'>Anh Trần Ngọc Thái Sơn</p>
                        <p className='text-2xl font-light'>Nhà Sáng Lập & Tổng Giám Đốc Tiki</p>
                    </span>
                </div>
            </div>

            <div style={{ display: 'none' }} className='rounded-lg mySlides relative mt-64 fadeTrans'>
                <div className='bg-gradient-to-b people relative ml-8 rounded-lg m-auto from-[#e9f7ff] to-[#f3f2fd] py-32 px-24'>
                    <p className='m-auto break-before-auto text-4xl leading-[3.5rem] tracking-wide font-[350]'>GHN đã và luôn là đối tác rất tin cậy của Lazada hơn 7 năm qua. Việc đầu tư vào Hệ thống phân loại hàng hoàn toàn tự động sẽ giúp GHN tăng tính cạnh tranh, đồng thời mang đến cho các đối tác như chúng tôi một dịch vụ vận chuyển xuất sắc.</p>
                </div>
                <div className='flex mt-8 ml-8 items-center'>
                    <img className='w-[80px] rounded-full' src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar2.jpg?v=509" alt="Anh Fabian Wandt"></img>
                    <span className='ml-4'>
                        <p className='text-3xl font-medium mb-4'>Anh Fabian Wandt</p>
                        <p className='text-2xl font-light'>Giám Đốc Vận Hành Lazada</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
