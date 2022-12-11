import React from 'react'
import './servicePlus.css'

export default function ServicePlus() {
    return (
        <div className='bg-[#fafafa] laptop:-mx-32 pt-20'>
            <div className='text-center mb-24'>
                <h3 className='text-5xl text-[#00467f] font-bold'>DỊCH VỤ CỘNG THÊM</h3>
            </div>
            <div className='laptop:grid grid-cols-3 text-center laptop:pl-36 pb-32'>
                <div className='col-span-1 w-[354px] mobile:m-auto mt-2 relative laptop:text-left'>
                    <a href='/service/giao-mot-phan'>
                        <img src="//theme.hstatic.net/200000472237/1000829412/14/cp_sv_add1_banner.jpg?v=502" alt="GIAO 1 PHẦN - TRẢ 1 PHẦN"></img>
                    </a>
                    <h3 className='mt-8  text-2xl font-semibold'>
                        <a href='/service/giao-mot-phan' className='hover:text-primary hover:no-underline'>
                            GIAO 1 PHẦN - TRẢ 1 PHẦN
                        </a>
                    </h3>
                    <p className='break-before-auto text-2xl leading-[2.8rem] mt-8 mb-4'>
                        Áp dụng cho ngành hàng Thời Trang - GHN sẽ hỗ trợ mang nhiều kiểu dáng,
                        kích thước của sản phẩm để người mua lựa chọn và chỉ tính phí như 1 lần giao
                        hàng bình thường. Những sản phẩm còn lại sẽ được GHN hoàn trả về Shop với mức phí ưu đãi hơn.
                    </p>
                    <a href='/service/giao-mot-phan' className='relative text-2xl hover:text-primary hover:no-underline'>
                        Xem thêm
                        <span className='seeMore'></span>
                    </a>
                </div>
                <div className='col-span-1 w-[354px] mobile:m-auto laptop:mt-2 mobile:mt-14 text-left'>
                    <a href='/service/khai-bao-gia-tri'>
                        <img className='w-[354px] h-[220px]' src="//theme.hstatic.net/200000472237/1000829412/14/cp_sv_add2_banner.jpg?v=502" alt="DỊCH VỤ KHAI BÁO GIÁ TRỊ HÀNG HÓA"></img>
                    </a>
                    <h3 className='mt-8 text-2xl font-semibold'>
                        <a href='/service/khai-bao-gia-tri' className='hover:text-primary hover:no-underline'>
                            DỊCH VỤ KHAI BÁO GIÁ TRỊ HÀNG HÓA
                        </a>
                    </h3>
                    <p className='break-before-auto text-2xl leading-[2.8rem] mt-8 mb-4'>
                        Chỉ phải chi trả một mức phí khiêm tốn, Quý khách sẽ nhận được mức đền bù 100% giá trị
                        hàng hóa (tối đa 5,000,000VNĐ) dựa vào giấy tờ chứng minh giá trị và giá trị khai báo,
                        trong trường hợp phát sinh rủi ro về hư hỏng hoặc mất mát hàng hóa.
                    </p>
                    <a href='/service/khai-bao-gia-tri' className='relative text-2xl hover:text-primary hover:no-underline'>
                        Xem thêm
                        <span className='seeMore'></span>
                    </a>
                </div>
                <div className='col-span-1 w-[354px] mobile:m-auto laptop:mt-2 mobile:mt-14 text-left'>
                    <a href='/service/ghn-xu'>
                        <img className='w-[354px] h-[220px]'
                            src="//theme.hstatic.net/200000472237/1000829412/14/cp_sv_add2_banner.jpg?v=502"
                            alt="GHN XU"></img>
                    </a>
                    <h3 className='mt-8 text-2xl font-semibold'>
                        <a href='/service/ghn-xu' className='hover:text-primary hover:no-underline'>
                            GHN XU
                        </a>
                    </h3>
                    <p className='break-before-auto text-2xl leading-[2.8rem] mt-8 mb-4'>
                        GHN Xu là hình thức thanh toán trả trước, Quý khách có thể nạp GHN Xu bằng
                        cách chuyển khoản hoặc ghé Bưu cục GHN toàn quốc để sử dụng các dịch vụ vận
                        chuyển và được hoàn tiền lên đến 6% số tiền đã nạp.
                    </p>
                    <a href='/service/ghn-xu' className='relative text-2xl hover:text-primary hover:no-underline'>
                        Xem thêm
                        <span className='seeMore'></span>
                    </a>
                </div>
            </div>
        </div>
    )
}
