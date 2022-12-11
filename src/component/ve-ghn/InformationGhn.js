import React from 'react'
import './inforghn.css'
import JoinWithUs from './JoinWithUs'
import SlideInforGhn from './SlideInforGhn'

export default function InformationGhn() {
    return (
        <div className='container laptop:mt-36  mobile:mt-56'>
            <div className='tablet:-mx-28'>
                <picture>
                    <source srcSet="//theme.hstatic.net/200000472237/1000829412/14/header_pageabout.jpg?v=509"></source>
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/header_pageabout.jpg?v=509" alt="Về GHN"></img>
                </picture>
            </div>
            <div className='border-l-4 border-primary mt-24 items-center'>
                <p className='text-4xl font-semibold pl-8'>CÂU CHUYỆN GHN</p>
            </div>
            <div className='mt-16'>
                <h3 className='text-7xl tracking-wide font-bold'>10 năm đồng hành cùng E-Commerce Việt Nam</h3>
                <p className='break-before-auto mb-24 text-left font-[350] mt-10 leading-[4rem] text-4xl'>GHN (Giao Hàng Nhanh) - Công ty giao nhận đầu tiên tại Việt Nam được thành lập năm 2012, với sứ mệnh phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác Thương mại điện tử trên toàn quốc. GHN cam kết mang đến cho khách hàng những trải nghiệm dịch vụ giao nhận nhanh, an toàn, hiệu quả giúp người bán hàng bán được nhiều hơn, người mua hàng hài lòng hơn.</p>
                <picture>
                    <source srcSet="//theme.hstatic.net/200000472237/1000829412/14/img_s-about_pageabout.jpg?v=509"></source>
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/img_s-about_pageabout.jpg?v=509" alt="10 năm đồng hành cùng E-Commerce Việt Nam"></img>
                </picture>
            </div>

            <div className='imgbg relative'></div>
            <div className='relative -top-[8.5rem] ml-10'>
                <div className='border-l-4 border-primary mt-24 items-center'>
                    <p className='text-4xl font-semibold pl-8'>THÀNH TÍCH NỔI BẬT</p>
                </div>
                <div className='tablet:grid grid-cols-2 text-left mt-6'>
                    <div className='col-span-1 rounded-lg'>
                        <p className='break-before-auto text-4xl leading-[3.5rem] tracking-wide font-[350]'>GHN luôn dành trọn tâm huyết để mang đến những dịch vụ giao nhận xuất sắc nhất. Niềm đam mê chất lượng đã giúp GHN đạt được những thành tích đáng kinh ngạc trong suốt 10 năm qua:<br></br>
                            <br></br>
                            - 20.000.000 đơn hàng được giao thành công mỗi tháng<br></br>
                            - Hơn 100.000 shop online và doanh nghiệp đã tin dùng<br></br>
                            - Đối tác chiến lược của Tiki, Shopee, Lazada, Sendo<br></br>
                            - Mạng lưới giao nhận phủ sóng 100% 63 tỉnh thành<br></br>
                            - Đạt tốc độ xử lý 500.000 đơn hàng/ ngày<br></br>
                        </p>
                    </div>
                    <div className='col-span-1 rounded-lg relative tablet:-top-[3rem]'>
                        <div className='bg-gradient-to-b ghn relative ml-8 rounded-lg m-auto from-[#e9f7ff] to-[#f3f2fd] py-12 w-[80%]'>
                            <p className='max-w-[70%] m-auto break-before-auto text-4xl leading-[3.5rem] tracking-wide font-[350]'>Dù bạn đang sở hữu một trang thương mại điện tử lớn, là chủ của một cửa hàng trực tuyến hay đơn giản một người bán hàng thông thường - GHN luôn sẵn sàng cung cấp dịch vụ giao nhận hàng chuyên nghiệp cho bạn.</p>
                        </div>
                        <div className='w-[70px] mt-10'>
                            <img src="//theme.hstatic.net/200000472237/1000829412/14/line_avatar1.jpg?v=509" alt=""></img>
                        </div>
                    </div>
                    <div className='border-l-4 border-primary mt-4 mb-4 items-center'>
                        <p className='text-4xl font-semibold pl-8'>ĐỐI TÁC CỦA GHN</p>
                    </div>
                </div>
                <h3 className='text-7xl tracking-wide font-bold'>Hơn 100.000 khách hàng đã tin dùng dịch vụ</h3>
            </div>
            <div className='grid grid-rows-2'>
                <div className='row-span-1'>
                    <div className='grid laptop:grid-cols-6 tablet:grid-cols-3 mobile:grid-cols-2'>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client1.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client2.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client3.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client3.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client4.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client5.png?v=509"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row-span-2 mt-4'>
                    <div className='grid laptop:grid-cols-6 tablet:grid-cols-3 mobile:grid-cols-2'>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client7.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client8.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client9.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client10.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client11.png?v=509"></img>
                            </a>
                        </div>
                        <div className='col-span-1 rounded-lg iconSp border-[1px] ml-4 shadow-sm'>
                            <a href='/pages/ve-ghn'>
                                <img className='w-[165px] h-[165px] m-auto' alt='Giới thiệu về ghn' src="//theme.hstatic.net/200000472237/1000829412/14/logo_client12.png?v=509"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <SlideInforGhn />
            <div className='mt-48 container mobile:mb-6 laptop:mb-0'>
                <div className='border-l-4 border-primary mt-4 mb-4 items-center'>
                    <p className='text-4xl font-semibold pl-8'>KHÁC BIỆT DỊCH VỤ</p>
                </div>
                <h3 className='text-7xl mt-12 tracking-wide mb-10 font-bold'>Giao nhận chuyên nghiệp cho E-commerce</h3>
                <div className='tablet:grid grid-cols-3 gap-12'>
                    <div className='col-span-1 text-center mobile:mb-8 tablet:mb-0'>
                        <img className='rounded-xl' src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar1.jpg?v=509" alt="Đa dạng dịch vụ"></img>
                        <div className='mt-8'>
                            <h3 className='font-normal text-4xl mb-6'>Đa dạng dịch vụ</h3>
                            <p className='text-3xl max-w-xl leading-10 m-auto font-light'>Giao hàng thương mại điện tử, Vận tải cho doanh nghiệp, Kho bãi và xử lý hàng hóa</p>
                        </div>
                    </div>
                    <div className='col-span-1 text-center mobile:mb-8 tablet:mb-0'>
                        <img className='rounded-xl' src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar2.jpg?v=509" alt="Hệ thống Auto-Sorting"></img>
                        <div className='mt-8'>
                            <h3 className='font-normal text-4xl mb-6'>Hệ thống Auto-Sorting</h3>
                            <p className='text-3xl max-w-xl leading-10 m-auto font-light'>Tự hào sở hữu 2 hệ thống phân loại hàng tự động 100% đầu tiên tại Việt Nam</p>
                        </div>
                    </div>
                    <div className='col-span-1 text-center mobile:mb-8 tablet:mb-0'>
                        <img className='rounded-xl' src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar3.jpg?v=509" alt="Chính sách ưu đãi hấp dẫn"></img>
                        <div className='mt-8'>
                            <h3 className='font-normal text-4xl mb-6'>Chính sách ưu đãi hấp dẫn</h3>
                            <p className='text-3xl max-w-xl leading-10 m-auto font-light'>Miễn phí Lấy hàng tận nơi, Miễn phí Thu hộ, Miễn phí Giao lại, Hoàn đến 6% khi nạp GHN Xu</p>
                        </div>
                    </div>
                </div>
            </div>
            <JoinWithUs />
        </div>
    )
}
