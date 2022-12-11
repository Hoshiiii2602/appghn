import React from 'react'
import TablePrice from './price-table-service/TablePrice'

export default function ViewDetail() {
    return (
        <div className='mt-32 mobile:mt-56'>


            <div className='bg-[#fafafa] h-20 tablet:-mx-20 flex items-center text-[15px]'>
                <a
                    href='/'
                    className='ml-32 hover:text-primary hover:no-underline'>
                    Trang chủ
                </a>
                <div className='border-l-2 border-solid w-[1px] h-[15px] ml-6'></div>
                <p
                    className='ml-6 text-[#777b83]'>
                    Bảng giá mới siêu tiết kiệm - Giá chỉ từ 15,5k/đơn
                </p>
            </div>


            <div className='container'>


                <div className='text-center mt-14'>
                    <h3
                        className='text-5xl text-[#00467f] font-bold'>
                        BẢNG GIÁ MỚI SIÊU TIẾT KIỆM - GIÁ CHỈ TỪ 15,5K/ĐƠN
                    </h3>
                    <div className='border-b-[2.5px] mt-6 border-[#00467f] m-auto w-[52%] mb-24'></div>
                </div>


                <div>


                    <div className='laptop:-mx-32'>
                        <img
                            alt='Lời ngỏ cám ơn'
                            src='//file.hstatic.net/200000472237/file/web_c2796443da6142aba36333655e77da0c_master.jpg'>
                        </img>
                    </div>


                    <p className='mt-4 text-2xl leading-[36px] tracking-wide'>
                        Kính gửi <span className='text-primary font-bold'>QUÝ KHÁCH HÀNG,</span><br></br>

                        GHN rất vinh hạnh được trở thành người đồng hành đáng tin cậy cùng Quý Khách Hàng trong suốt thời gian qua.<br></br>

                        Tiếp tục mang đến cho Quý Khách Hàng những trải nghiệm dịch vụ tận tâm và tốt nhất, đội ngũ GHN chính thức ra mắt bảng giá <span className='text-primary font-bold'>SIÊU TIẾT KIỆM</span> mới. <br></br>

                        Từ 0h ngày 07/09/2022, GHN chính thức áp dụng bảng giá mới với mức giá siêu tốt dành cho Khách Hàng chưa ký hợp đồng (*)
                    </p>


                </div>


                <TablePrice />


            </div>
        </div>
    )
}
