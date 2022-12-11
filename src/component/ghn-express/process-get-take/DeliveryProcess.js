import React from 'react'
import './deliveryProcess.css'

export default function DeliveryProcess() {
    return (
        <div>
            <div className='text-center mb-36 mt-24'>
                <h3 className='text-5xl text-[#00467f] font-bold'>QUY TRÌNH GIAO NHẬN</h3>
            </div>
            <div className='laptop:grid grid-cols-6 gap-10 text-center'>
                <div className='px-4 mb-4 col-span-1 div1 relative'>
                    <div className=
                    'w-[100px] login z-[2] bg-white relative rounded-full border-[6px] m-auto border-[#00467f] h-[100px]'>
                        <img className=
                        'w-[40px] h-[40px] m-auto mt-[28%]' src="//theme.hstatic.net/200000472237/1000829412/14/cp_process1.png?v=502" alt=" Đăng nhập/ <br> Đăng ký"></img>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-[640] text-2xl'>
                            ĐĂNG NHẬP/<br></br>
                            ĐĂNG KÝ
                        </h3>
                        <p className='mt-8 text-2xl font-light'>
                            Đăng nhập hoặc tạo tài khoản mới trên app GHN hoặc website khachhang.ghn.vn để bắt đầu.</p>
                    </div>
                </div>
                <div className='px-4 mb-4 col-span-1 div1 relative'>
                    <div className=
                        'w-[100px] login z-[2] bg-white relative rounded-full border-[6px] m-auto border-[#00467f] h-[100px]'>
                        <img className='w-[40px] h-[40px] m-auto mt-[28%]'
                            src="//theme.hstatic.net/200000472237/1000829412/14/cp_process2.png?v=502"
                            alt="Tạo đơn hàng"></img>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-[640] text-2xl'>
                            TẠO ĐƠN HÀNG
                        </h3>
                        <p className='mt-8 text-2xl font-light'>Tạo đơn hàng trên app GHN Express /
                            website khachhang.ghn.vn, hoặc ghé hệ thống 2000 điểm gửi hàng GHN toàn quốc.</p>
                    </div>
                </div><div className='px-4 mb-4 col-span-1 div1 relative'>
                    <div className=
                    'w-[100px] login z-[2] bg-white relative rounded-full border-[6px] m-auto border-[#00467f] h-[100px]'>
                        <img className='w-[40px] h-[40px] m-auto mt-[28%]'
                            src="//theme.hstatic.net/200000472237/1000829412/14/cp_process3.png?v=502"
                            alt="Lấy hàng"></img>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-[640] text-2xl'>
                            LẤY HÀNG
                        </h3>
                        <p className='mt-8 text-2xl font-light'>
                            Bàn giao hàng cần gửi cho tài xế GHN tại địa chỉ người gửi cung cấp.</p>
                    </div>
                </div><div className='px-4 mb-4 col-span-1 div1 relative'>
                    <div className=
                    'w-[100px] login z-[2] bg-white relative rounded-full border-[6px] m-auto border-[#00467f] h-[100px]'>
                        <img className='w-[40px] h-[40px] m-auto mt-[28%]'
                            src="//theme.hstatic.net/200000472237/1000829412/14/cp_process4.png?v=502"
                            alt="Theo dõi tình trạng đơn hàng"></img>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-[640] text-2xl'>
                            THEO DÕI TÌNH TRẠNG ĐƠN HÀNG
                        </h3>
                        <p className='mt-8 text-2xl font-light'>
                            Người gửi quản lý và theo dõi tình trạng đơn hàng thông qua app GHN hoặc website khachhang.ghn.vn.</p>
                    </div>
                </div><div className='px-4 mb-4 col-span-1 div1 relative'>
                    <div className='w-[100px] login z-[2] bg-white relative rounded-full border-[6px] m-auto border-[#00467f] h-[100px]'>
                        <img className='w-[40px] h-[40px] m-auto mt-[28%]'
                            src="//theme.hstatic.net/200000472237/1000829412/14/cp_process5.png?v=502"
                            alt="Giao hàng"></img>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-[640] text-2xl'>
                           GIAO HÀNG
                        </h3>
                        <p className='mt-8 text-2xl font-light'>
                            GHN giao hàng cho người nhận, thu tiền hộ (COD) theo yêu cầu của người gửi.</p>
                    </div>
                </div><div className='col-span-1 relative'>
                    <div className='w-[100px] login z-[2] bg-white relative rounded-full border-[6px] m-auto border-[#00467f] h-[100px]'>
                        <img className='w-[40px] h-[40px] m-auto mt-[28%]'
                            src="//theme.hstatic.net/200000472237/1000829412/14/cp_process6.png?v=502"
                            alt="Nhận tiền thu hộ"></img>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-[640] text-2xl'>
                           NHẬN TIỀN THU HỘ
                        </h3>
                        <p className='mt-8 text-2xl font-light'>
                            GHN hoàn trả tiền thu hộ cho người gửi thông qua tài khoản ngân hàng xuyên suốt các ngày trong tuần.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
