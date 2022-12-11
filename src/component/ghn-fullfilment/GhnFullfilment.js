import React from 'react'
import FrPolicy from '../frames/FrPolyci'
import TooglePicture from '../frames/TogglePicture'
import RegistorLoginFullfil from './RegistorLoginFullfil'

export default function GhnFullfilment() {
    const data = {
        src: {
            src1: '//theme.hstatic.net/200000472237/1000829412/14/kho_advantages1.png?v=509',
            src2: '//theme.hstatic.net/200000472237/1000829412/14/kho_advantages2.png?v=509',
            src3: '//theme.hstatic.net/200000472237/1000829412/14/kho_advantages3.png?v=509',
        },
        title: {
            til1: '  CÔNG NGHỆ QUẢN LÝ KHO VẬN HIỆN ĐẠI',
            til2: 'XỬ LÝ YÊU CẦU BÁN HÀNG ĐA KÊNH',
            til3: 'GIẢI PHÁP KHO VẬN TOÀN DIỆN VÀ TỐI ƯU ',
        },
        desc: {
            desc1: 'Hệ thống quản lý thông minh - trực tuyến 24/7 giúp khách hàng dễ dàng kiểm tra tình trạng hàng hóa, giám sát quá trình xử lý nhanh chóng (lấy hàng, đóng gói, bàn giao đơn vị vận chuyển), theo dõi hành trình giao hàng, truy xuất lịch sử giao dịch để quản lý nhập – xuất – tồn kho, hỗ trợ tích hợp API với hệ thống quản lý sẵn có của khách hàng. ',
            desc2: 'Sở hữu diện tích kho bãi hơn 100.000m2 với cơ sở hạ tầng hiện đại kết hợp cùng mạng lưới 1000 xe tải phủ sóng khắp 63 tỉnh thành, hệ thống quy trình vận hành chuyên nghiệp cho từng đối tượng khách hàng khác nhau, sẵn sàng đáp ứng kịp thời nhu cầu về phát sinh tăng đột biến sản lượng hàng hóa trong mùa cao điểm. ',
            desc3: 'Với đội ngũ quản lý trên 15 năm kinh nghiệm, đội ngũ hơn 10.000 nhân viên, tài xế chuyên nghiệp, GHN mang đến các giải pháp kho vận trọn gói giúp khách hàng giải quyết các vấn đề kho bãi, vận chuyển hàng hóa, tăng trưởng kinh doanh nhanh chóng, tiết kiệm chi phí đầu tư vào cơ sở hạ tầng, xóa bỏ nỗi lo về năng lực vận hành kho bãi.',
        }
    }
    const data2 = {
        src: {
            src1:'//theme.hstatic.net/200000472237/1000829412/14/kho_sv_add1_banner.jpg?v=509',
            src2:'//theme.hstatic.net/200000472237/1000829412/14/kho_sv_add2_banner.jpg?v=509',
            src3:'//theme.hstatic.net/200000472237/1000829412/14/kho_sv_add3_banner.jpg?v=509',
            src4:'//theme.hstatic.net/200000472237/1000829412/14/kho_sv_add4_banner.jpg?v=509',
            src5:'//theme.hstatic.net/200000472237/1000829412/14/kho_sv_add5_banner.jpg?v=509',
        },
        title: {
            til1:'Nhập hàng và lưu trữ, quản lý nhập – xuất – tồn kho',
            til2:'Xử lý đơn hàng theo yêu cầu: lấy hàng, đóng gói, bàn giao đơn vị vận chuyển',
            til3:'Giao hàng từ kho đến hệ thống siêu thị, chuỗi cửa hàng, nhà bán lẻ',
            til4:'Giao hàng từ kho đến người mua hàng online và thu hộ COD',
            til5:'Quản lý đổi trả hàng',
        },
        number: {
            number1:'1',
            number2:'2',
            number3:'3',
            number4:'4',
            number5:'5',
        }
    }
    return (
        <div className='laptop:mt-36 mobile:mt-56 tablet:mt-44'>
            <div className='tablet:-mx-20'>
                <picture>
                    <source srcSet="//theme.hstatic.net/200000472237/1000829412/14/banner-sv-kho.jpg?v=509"></source>
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/banner-sv-kho.jpg?v=509" alt="Dịch vụ kho bãi và xử lý hàng hóa"></img>
                </picture>
            </div>
            <FrPolicy data={data} />
            <TooglePicture data2 = {data2} />
            <RegistorLoginFullfil />
        </div>
    )
}
