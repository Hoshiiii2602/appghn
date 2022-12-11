import React from 'react'
import PriceTable from './PriceTable'

export default function Endow() {
    return (
        <div className='mt-20'>
            <p className='text-2xl font-semibold'>Tìm bưu cục gần nhất <a className
                ='text-[#f6871f] hover:no-underline' href="https://bit.ly/2Ulbe88">tại đây</a></p>
            <p className='text-2xl mt-8 font-semibold text-[#f6871f]'>Chọn GHN-Nhận ngay 4 ưu đãi đặc quyền:</p>
            <ul className='ml-12 list-outside list-disc'>
                <li className='text-2xl font-bold mt-8'>
                    <p className='text-[#f6871f] mr-2'>Miễn phí lấy hàng:
                        <span className='text-black font-light ml-4'>
                            GHN sẽ không thu phí lấy hàng cho các đơn nhân viên giao nhận đến tận nơi để lấy hàng.</span></p>
                </li>
                <li className='text-2xl font-bold mt-8'>
                    <p className='text-[#f6871f] mr-2'>Miễn phí Giao lại:
                        <span className='text-black font-light ml-4'>
                            Trong trường hợp giao hàng lần đầu tiên không thành công, GHN sẽ miễn phí giao lại 2 lần tiếp theo (áp dụng cho đơn chưa chuyển sang trạng thái Chờ Xác Nhận Giao Lại).</span></p>
                </li>
                <li className='text-2xl font-bold mt-8'>
                    <p className='text-[#f6871f] mr-2'>Dịch vụ Khai báo giá trị Hàng hóa:
                        <span className='text-black font-light ml-4'>
                            Chỉ phải chi trả một mức phí khiêm tốn, Quý khách sẽ nhận được mức đền bù 100% giá trị hàng hóa (tối đa 5,000,000VNĐ) dựa vào giấy tờ chứng minh giá trị và giá trị khai báo, trong trường hợp phát sinh rủi ro về hư hỏng hoặc mất mát hàng hóa.</span></p>
                </li>
                <li className='text-2xl font-bold mt-8'>
                    <p className='text-[#f6871f] mr-2'>Hoàn Xu lên đến 6%:
                        <span className='text-black font-light ml-4'>
                        Nhận ưu đãi hoàn Xu lên đến 6% số tiền đã nạp khi sử dụng dịch vụ Thanh toán trả trước GHN Xu. Nạp ngay GHN Xu để nhận ưu đãi.</span></p>
                </li>
            </ul>
            <PriceTable />
        </div>
    )
}
