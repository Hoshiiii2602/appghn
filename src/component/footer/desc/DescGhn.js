import React from 'react'

export default function DescGhn() {
    return (
        <div className='grid laptop:grid-cols-8 tablet:grid-cols-2 laptop:gap-2 tablet:gap-6'>
            <div className='laptop:col-span-3 tablet:col-span-1'>
                <div className='mb-6'>
                    <span className='text-2xl font-[600]'>
                        CÔNG TY CỔ PHẦN DỊCH VỤ GIAO HÀNG NHANH
                    </span><br></br>
                </div>
                <span>Công ty giao nhận đầu tiên tại Việt Nam được thành lập<br></br>
                    với sứ mệnh phục vụ nhu cầu vận chuyển chuyên
                    <br></br> nghiệp của các đối tác Thương mại điện tử trên toàn<br></br> quốc.</span><br></br>
                <span>Giấy CNĐKDN: 0311 907 295 do Sở Kế Hoạch và Đầu Tư<br></br>
                    TP HCM cấp lần đầu ngày 02/08/2012, cấp thay đổi lần<br></br> thứ 16 ngày 10/5/2019.</span>
            </div>
            <div className='col-span-1 tablet:ml-10 mobile:ml-0'>
                <div className='mb-6'>
                    <span className='text-2xl font-[600]'>VỀ GHN</span><br></br>
                </div>
                <div className='mb-4'>
                    <a
                        href='/pages/ve-ghn'
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Giới thiệu GHN
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        href='/pages/notification'
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Hồ sơ doanh nghiệp
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        href='/pages/work-ghn'
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Tuyển dụng
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        href='/pages/contact-ghn'
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Liên hệ
                    </a>
                </div>
            </div>
            <div className='col-span-2 laptop:block mobile:hidden tablet:hidden'>
                <div className='mb-6'>
                    <span
                        className='text-2xl font-[600]'>
                        THÔNG TIN DỊCH VỤ
                    </span><br></br>
                </div>
                <div className='mb-4'>
                    <a
                        href='/pages/table-price'
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Bảng giá
                    </a>
                </div>
                <div className='mb-4'>
                    <a href='/pages/xu-ghn'
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        GHN Xu
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Quy trình gửi hàng
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Khai báo giá trị hàng hóa
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Hàng hóa không vận chuyển
                    </a>
                </div>
            </div>
            <div className='col-span-2 laptop:block tablet:hidden mobile:hidden'>
                <div className='mb-6'>
                    <span
                        className='text-2xl font-[600]'>
                        CHÍNH SÁCH
                    </span><br></br>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Chính sách bồi thường
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Quy định về khiếu nại
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Điều khoản sử dụng
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                        className='hover:text-primary hover:cursor-pointer hover:no-underline'>
                        Chính sách bảo mật
                    </a>
                </div>
            </div>
        </div>
    )
}
