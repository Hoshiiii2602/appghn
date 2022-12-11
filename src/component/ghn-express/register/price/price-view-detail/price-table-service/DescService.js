import React from 'react'

export default function DescService() {

    const stringCalc1 = "X kg < 0,5  sẽ được làm tròn là 0,5 kg"
    const stringCalc2 = "X kg > 0,5 kg: sẽ được làm tròn là 1 kg."
    return (
        <div className='mt-8'>
            <strong className='text-5xl'>II. MÔ TẢ TUYẾN DỊCH VỤ</strong>
            <p className='mt-6'>
                <img alt="Bảng giá dịch vụ giao hàng GHN" src="https://file.hstatic.net/1000376681/file/tuyen_dich_vu__2__aa4e9d652e2d4d4abad20af69b88a015.png"></img>
            </p>
            <p className='mt-12'>
                <strong>(*)Thông báo</strong>
            </p>
            <ul className='list-outside tablet:ml-16 list-disc mt-6'>
                <li className='mt-2'>
                    <p className='text-2xl font-normal'>Bảng giá và Dịch vụ gia tăng có thể thay đổi theo hợp đồng giữa GHN và khách hàng. Shop có thể liên hệ Nhân viên kinh doanh phụ trách để tìm hiểu thêm chi tiết.</p>
                </li>
                <li className='mt-2'>
                    <p className='text-2xl font-normal'>Những Khách Hàng đã ký hợp đồng sẽ vẫn giữ nguyên mức giá đã ký với GHN.</p>
                </li>
                <li className='mt-2'>
                    <p className='text-2xl font-normal'>Việc tính phí chuyển khoản tiền Thu hộ (COD) bắt đầu áp dụng từ 01/08/2021</p>
                </li>
                <li className='mt-2'>
                    <p className='text-2xl font-normal leading-10'>Không áp dụng phí chuyển khoản tiền Thu hộ (COD) với các khách hàng lên đơn qua sàn Thương mại Điện tử (Shopee, Lazada, Tiki, Sendo) hoặc một số các đối tác có hợp đồng thoả thuận với GHN. Thông tin chi tiết Shop vui lòng liên hệ Group chính thức của GHN để được hỗ trợ nhanh chóng nhất:
                        <br></br> <a href='facebook.com/groups/tamsugiaohangcungGHN' className='font-semibold hover:text-primary hover:no-underline'>facebook.com/groups/tamsugiaohangcungGHN</a></p>
                </li>
            </ul>



            <p className='mt-12'>
                <strong>(**) Dịch vụ khai báo giá trị hàng hóa</strong>
            </p>
            <ul className='ml-8 mt-6 leading-10'>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- Không áp dụng với khách hàng là các Sàn giao dịch Thương mại Điện tử. Đối với các Sàn giao dịch Thương mại Điện tử, các Bên sẽ thoả thuận theo từng Hợp đồng riêng.</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- Phí khai giá hàng hoá nhằm đảm bảo quyền lợi tối đa cho khách hàng khi xảy ra thiệt hại, hư hỏng, mất mát.</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- Về quy trình bồi thường, khách hàng vui lòng tham khảo chi tiết trong mục “Chính sách bồi thường”
                        <a href="https://ghn.vn/pages/chinh-sach-boi-thuong-cua-ghn" className='font-semibold hover:text-primary hover:no-underline'> tại đây</a></p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal leading-10'>- Tìm hiểu thêm về Dịch vụ khai báo giá trị hàng hóa tại đây hoặc một số các đối tác có hợp đồng thoả thuận với GHN. Thông tin chi tiết Shop vui lòng liên hệ Group chính thức của GHN để được hỗ trợ nhanh chóng nhất:
                        <a href="https://ghn.vn/pages/chinh-sach-boi-thuong-cua-ghn" className='font-semibold hover:text-primary hover:no-underline'> tại đây</a></p>
                </li>
            </ul>


            <p className='mt-12'>
                <strong>(***) Thay đổi họ tên, địa chỉ người nhận bưu gửi, giá trị thu hộ:</strong>
            </p>
            <ul className='ml-8 mt-6 leading-10'>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- Khách hàng/Người gửi được quyền thay đổi tối đa 02 (hai)
                        trong số các nội dung sau: ghi chú bắt buộc, tên người nhận, số điện thoại người nhận, địa chỉ giao
                        hàng hoặc khu vực giao hàng, giá trị thu hộ.
                    </p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>Lưu ý: Dịch vụ này chỉ áp dụng cho Bưu gửi chưa hết thời
                        gian toàn trình và không bị tịch thu hoặc tiêu hủy theo quy định của pháp luật.</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal leading-10'>- Việc thay đổi thông tin giao hàng sẽ làm thay đổi Cước phí
                        Dịch vụ và Thời gian toàn trình, muộn hơn thời gian giao dự kiến từ
                        01 (một) đến 05 (năm) ngày, tùy theo loại thông tin mà Khách hàng/Người gửi thay đổi tính từ thời điểm GHN nhận được yêu cầu.</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal leading-10'>- GHN KHÔNG hỗ trợ thay đổi họ tên, địa chỉ người nhận bưu gửi trong trường
                        hợp đơn hàng do người nhận trả tiền cước (trừ khi có thông tin xác nhận từ người gửi).</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal leading-10'>- Để tránh ảnh hưởng đến quyền lợi của Khách hàng/Người gửi,
                        GHN KHÔNG hỗ trợ thay đổi thông tin giao hàng nếu Đơn hàng đó được người gửi sử dụng mã giảm giá.</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal leading-10'>- Việc thay đổi các thông tin trên chỉ được thực hiện 01 (một) lần.</p></li>
            </ul>



            <p className='mt-12'>
                <strong>(****) Lưu ý:</strong>
            </p>
            <ul className='ml-8 mt-6 leading-10'>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- GHN không hỗ trợ những yêu cầu nằm ngoài quy định của công ty như: giao hàng ra ngoài phạm vi giao nhận,...</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- Đơn hàng sau 16:00 được tính thành đơn hàng của ngày làm việc kế tiếp.</p>
                </li>
                <li className='mt-3'>
                    <p className='text-2xl font-normal'>- Khi có nhu cầu giao hàng, Quý khách hàng vui lòng truy cập vào trang
                        <a href="https://ghn.vn/pages/chinh-sach-boi-thuong-cua-ghn" className='font-semibold hover:text-primary hover:no-underline'> khachhang.ghn.vn </a>để nhập thông tin đơn hàng</p>
                </li>
            </ul>
            <p className='mt-8'>
                <img alt='danh sách giải đáp' className='m-auto' src="//file.hstatic.net/200000472237/file/untitled-1__2_-01_0209360eef8649e685b0200ab30feb42_1024x1024.png"></img>
            </p>
            <p className='text-2xl font-normal mt-6'>Trường hợp có sự chênh lệch giữa khối lượng thực tế và khối lượng quy
                đổi thì GHN sẽ áp dụng tính cước đối với khối lượng cao hơn (“Khối lượng tính cước”). Khối lượng quy đổi tính theo công thức:</p>

            <p className='mt-8'>
                <img className='m-auto' alt="Bảng quy đổi khối lượng" src="https://file.hstatic.net/1000376681/file/khoi_luong_quy_doi_92cc063dba014953b3a488a477791b65.png"></img>
            </p>
            <p className='text-2xl font-normal mt-6'>Trường hợp Khối lượng tính cước bị lẻ số kg thì số kg lẻ
                (sau đây tạm gọi là số “X”) sẽ được làm tròn lên như sau:</p>

            <ul className='list-disc list-inside mt-8 ml-12 mb-20'>
                <li>{stringCalc1}</li>
                <li>{stringCalc2}</li>
            </ul>
        </div>
    )
}
