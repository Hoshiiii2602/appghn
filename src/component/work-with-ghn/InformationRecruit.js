import React, { useEffect, useState } from 'react'
import { BiCalendar } from 'react-icons/bi'

export default function InformationRecruit() {


    const [hiddenseemore, setHiddenSeemore] = useState('hidden')
    const handleSeemore = (e) => {
        setHiddenSeemore('block')
        e.target.classList.add('hidden')
    }
    useEffect(() => {
        const seemore = document.getElementsByClassName('seemore')

        for (let i = 0; i < seemore.length; i++) {
            if (hiddenseemore !== 'hidden') {
                seemore[i].classList.remove('hidden')
                seemore[i].classList.add('block')
            } else {
                seemore[i].classList.add('hidden')
            }
        }
    }, [hiddenseemore])
    return (
        <div className='laptop:w-[92%] laptop:ml-16 relative mb-12'>
            <span className='text-left border-black border-b-[2px] w-full flex justify-between pb-6 pt-4'>
                <p className='text-4xl font-bold'>
                    TIN TỨC TUYỂN DỤNG
                </p>
                <a href='/pages/work-ghn' className='text-2xl font-light hover:no-underline mr-4'>Xem thêm</a>
            </span>
            <article className='text-left'>
                <div className='flex mt-20 my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/tuyen-dung-nhan-vien-kinh-doanh-vung-ha-noi"
                            title="[GHN EXPRESS] TUYỂN DỤNG NHÂN VIÊN KINH DOANH_VÙNG HÀ NỘI"
                            rel="nofollow">
                            <picture>
                                <img
                                    className='laptop:w-[242px] mobile:w-auto mobile:h-auto laptop:h-[242px]'
                                    src="//file.hstatic.net/200000472237/file/thiet_ke_chua_co_ten__1__669fcb64331e414bb1725dd96cf2d505_grande.png"
                                    alt="[GHN EXPRESS] TUYỂN DỤNG NHÂN VIÊN KINH DOANH_VÙNG HÀ NỘI">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/tuyen-dung-nhan-vien-kinh-doanh-vung-ha-noi'>
                            [GHN EXPRESS] TUYỂN DỤNG NHÂN VIÊN KINH DOANH_VÙNG HÀ NỘI
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            26/10/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            Mô tả công việc:- Chủ động tìm kiếm khách hàng (Shop online,
                            Offline, Cửa hàng, Doanh nghiệp) có nhu cầu sử dụng dịch vụ Giao Hàng,
                            với chi phí và thời gian vận chuyển tốt...
                        </p>
                    </div>
                </div>


                <div className='flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/hcm-digital-marketing"
                            title="[HCM] Digital Marketing"
                            rel="nofollow">
                            <picture>
                                <img
                                    className='laptop:w-[242px] mobile:w-auto mobile:h-auto laptop:h-[146px]'
                                    src="//file.hstatic.net/200000472237/article/logo_new-01__2__e6024c31fa584c348d01d81e3bf0e895_grande.png"
                                    alt="[HCM] Digital Marketing">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href="/blogs/tin-tuc-tuyen-dung/hcm-digital-marketing"
                            title='[HCM] Digital Marketing'>
                            [HCM] Digital Marketing
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            17/10/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            1. Mô tả công việc*Xây dựng kế hoạch/ chiến lược DigitalLên kế hoạch và
                            thực thi các chiến dịch quảng cáo trên các kênh Online như: Google,
                            Facebook, Zalo, Tiktok… và các kênh Digital Marketing...
                        </p>
                    </div>
                </div>


                <div className='flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/hcm-truong-nhom-telesale"
                            title="[HCM] Trưởng nhóm Telesale"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-auto mobile:w-auto mobile:h-auto'
                                    src="//file.hstatic.net/200000472237/article/logo_new-01__2__9799985ded2d4946a0dde6cab500cc3a_grande.png"
                                    alt="[HCM] Trưởng nhóm Telesale">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/hcm-truong-nhom-telesale'
                            title='[HCM] Trưởng nhóm Telesale'>
                            [HCM] Trưởng nhóm Telesale
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            17/10/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            GHN là công ty giao nhận đầu tiên tại Việt Nam được thành lập với sứ mệnh phục
                            vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác Thương mại điện tử trên toàn...
                        </p>
                    </div>
                </div>


                <div className='flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/nvgh-hn-hcm"
                            title="[GHN EXPRESS] NHÂN VIÊN GIAO HÀNG _ HÀ NỘI _ HỒ CHÍ MINH"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-auto mobile:w-auto mobile:h-auto'
                                    src="//file.hstatic.net/200000472237/file/ky_anh__4__759ed15db57c485b8b86fac6dc7bddfb_grande.png"
                                    alt="[GHN EXPRESS] NHÂN VIÊN GIAO HÀNG _ HÀ NỘI _ HỒ CHÍ MINH">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/nvgh-hn-hcm'
                            title='[GHN EXPRESS] NHÂN VIÊN GIAO HÀNG _ HÀ NỘI _ HỒ CHÍ MINH'>
                            [GHN EXPRESS] NHÂN VIÊN GIAO HÀNG _ HÀ NỘI _ HỒ CHÍ MINH
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            09/09/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            1. Mô tả công việc:Giao hàng cho người mua đến tận nhà trong KV Hà Nội
                            (Phụ trách tuyến cố định).Lấy hàng: Đến các đối tác (Shop) nhận hàng và
                            chuyển về kho của công...
                        </p>
                    </div>
                </div>


                <div className='flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/nvgn-hcm"
                            title="[GHN EXPRESS] NHÂN VIÊN GIAO NHẬN _ HỒ CHÍ MINH"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-auto mobile:w-auto mobile:h-auto'
                                    src="//file.hstatic.net/200000472237/file/ky_anh_dd16807d8ac54ec5aa4a45235e5341fa_grande.png"
                                    alt="[GHN EXPRESS] NHÂN VIÊN GIAO NHẬN _ HỒ CHÍ MINH">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/nvgn-hcm'
                            title='[GHN EXPRESS] NHÂN VIÊN GIAO NHẬN _ HỒ CHÍ MINH'>
                            [GHN EXPRESS] NHÂN VIÊN GIAO NHẬN _ HỒ CHÍ MINH
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            09/09/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            1. Mô tả công việc: - Giao hàng: Nhận hàng từ kho của công ty và chuyển đến tận
                            tay khách hàng (1 ngày 2 chuyến, sáng/chiều).- Tìm kiếm khách hàng tiềm năng và
                            cskh đang...
                        </p>
                    </div>
                </div>


                <div className='flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/ghn-va-ahamove-tro-thanh-case-study-cua-harvard-business-school-ve-nhung-cai-tien-trong-linh-vuc-logistics"
                             title="GHN và Ahamove trở thành case-study của Harvard Business School về những cải tiến trong lĩnh vực Logistics" 
                             rel="nofollow">
                            <picture>
                                <img
                                    className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:max-w-[100px] tablet:max-w-[242px] mobile:h-auto'
                                    src="https://file.hstatic.net/1000376681/file/aha_2_96cb4bb65a4245c281c9a52897e1e75f.jpg"
                                    alt="GHN và Ahamove trở thành case-study của Harvard Business School về những cải tiến trong lĩnh vực Logistics">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href="/blogs/tin-tuc-tuyen-dung/ghn-va-ahamove-tro-thanh-case-study-cua-harvard-business-school-ve-nhung-cai-tien-trong-linh-vuc-logistics"
                            title='GHN và Ahamove trở thành case-study của Harvard Business School về những cải tiến trong lĩnh vực Logistics'>
                            GHN và Ahamove trở thành case-study của Harvard Business School về những cải tiến trong lĩnh vực Logistics
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            21/04/2022
                        </span>
                        <p className='break-before-auto mt-2 text-2xl'>
                            GHN và AhaMove là đội đầu tiên sở hữu cùng lúc 2 mô hình vận hành Hub&Spoke và
                            On-demand, và cũng là doanh nghiệp đầu tiên trên thế giới cải tiến bằng tạo ra
                            Hybrid...
                        </p>
                    </div>
                </div>


                <div className='seemore flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc"
                            title="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-auto'
                                    src="https://file.hstatic.net/1000376681/file/ghn_1_d714024dae0249f78cb171e3ba30e7af.jpg"
                                    alt="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc'
                            title='Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc'>
                            Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            21/04/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            Nhân ngày Phụ nữ Việt Nam 20/10, công ty đã có những phần quà vô cùng đặc biệt
                            gửi tặng các chị em trên GHN, AhaMove và Gido toàn quốc. Đó chính là chiếc túi...
                        </p>
                    </div>
                </div>
                <div className='seemore flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc"
                            title="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-auto'
                                    src="https://file.hstatic.net/1000376681/file/ghn_1_d714024dae0249f78cb171e3ba30e7af.jpg"
                                    alt="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc'
                            title='Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc'>
                            Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            21/04/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            Nhân ngày Phụ nữ Việt Nam 20/10, công ty đã có những phần quà vô cùng đặc biệt gửi
                            tặng các chị em trên GHN, AhaMove và Gido toàn quốc. Đó chính là chiếc túi...
                        </p>
                    </div>
                </div>

                <div className='seemore flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc"
                            title="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-auto'
                                    src="https://file.hstatic.net/1000376681/file/ghn_1_d714024dae0249f78cb171e3ba30e7af.jpg"
                                    alt="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc'
                            title='Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc'>
                            Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            21/04/2022
                        </span>
                        <p
                            className='break-before-auto mt-2 text-2xl'>
                            Nhân ngày Phụ nữ Việt Nam 20/10, công ty đã có những phần quà vô cùng đặc biệt
                            gửi tặng các chị em trên GHN, AhaMove và Gido toàn quốc. Đó chính là chiếc túi...
                        </p>
                    </div>
                </div>
                <div className='seemore flex my-4 mobile:my-8'>
                    <div className=''>
                        <a
                            href="/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc"
                            title="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc"
                            rel="nofollow">
                            <picture>
                                <img className='laptop:w-[242px] laptop:h-[146px] mobile:w-auto mobile:h-autoF'
                                    src="https://file.hstatic.net/1000376681/file/ghn_1_d714024dae0249f78cb171e3ba30e7af.jpg"
                                    alt="Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc">
                                </img>
                            </picture>
                        </a>
                    </div>
                    <div className='block max-w-[70%] ml-[18px]'>
                        <a
                            className='text-[16px] hover:text-primary hover:no-underline font-semibold'
                            href='/blogs/tin-tuc-tuyen-dung/tong-ket-su-kien-ky-niem-ngay-phu-nu-viet-nam-tren-toan-quoc'
                            title='Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc'>
                            Tổng kết sự kiện kỷ niệm ngày Phụ nữ Việt Nam trên toàn quốc
                        </a>
                        <span className='mt-[10px] items-center flex text-2xl'>
                            <BiCalendar style={{ marginRight: '6px' }} />
                            21/04/2022
                        </span>
                        <p className='break-before-auto mt-2 text-2xl'>
                            Nhân ngày Phụ nữ Việt Nam 20/10, công ty đã có những phần quà vô cùng đặc biệt
                            gửi tặng các chị em trên GHN, AhaMove và Gido toàn quốc. Đó chính là chiếc túi...
                        </p>
                    </div>
                </div>
            </article>
            <button
                onClick={(e) => handleSeemore(e)}
                className='mt-12 m-atuo text-white w-[70%] py-3 rounded-lg bg-[#00467f] text-2xl font-normal'>
                XEM THÊM
            </button>
        </div>
    )
}
