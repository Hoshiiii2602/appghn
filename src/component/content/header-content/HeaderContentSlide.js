import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeaderSlide.css";
import { Link } from "react-router-dom";

import { Autoplay, Pagination, Navigation, EffectFade, History } from "swiper";

export default function HeaderContentSlide() {
  var menu = [
    "Giao siêu nhanh<br>giá siêu tốc",
    "Bản tin chính GHN<br>Cập nhật trạng thái giao hàng",
    "Dịch vụ giao hàng<br>thương mại điện tử",
    "Tiết kiện chi phí<br>quản lý đơn sẵn",
  ];

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  };

  return (
    <div className="laptop:mt-40 mobile:mt-52 laptop:-mx-20">
      <Swiper
        spaceBetween={30}
        effect="fade"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "30px",
        }}
        pagination={pagination}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade, History]}
        className="mySwiper laptop:rounded-2xl mobile:rounded-sm"
      >
        <SwiperSlide>
          <picture>
            <source srcSet="https://file.hstatic.net/200000472237/file/chinh_phuc_vi_tri_dan_dau-01_9b59fcbce590492da9ca41f5148a73d3.jpg"></source>
            <img
              src="https://file.hstatic.net/200000472237/file/chinh_phuc_vi_tri_dan_dau-01_9b59fcbce590492da9ca41f5148a73d3.jpg"
              alt="GHN Thay Đổi Bộ Nhận Diện Thương Hiệu Mới"
            ></img>
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <picture>
              <source srcSet="https://file.hstatic.net/200000472237/file/slideshow_3_7d41169783fa4ed5a29186166433ffff.jpeg"></source>
              <img
                src="https://file.hstatic.net/200000472237/file/slideshow_3_7d41169783fa4ed5a29186166433ffff.jpeg"
                alt="GHN Liên Tục Cập Nhật Tuyến Ảnh Hưởng Do Dịch"
              ></img>
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <picture>
              <source srcSet="https://file.hstatic.net/200000472237/file/banner-ghn-express-1920_6abe9e468bf0419fbaf6c36d4f5f37d7.png"></source>
              <img
                src="https://file.hstatic.net/200000472237/file/banner-ghn-express-1920_6abe9e468bf0419fbaf6c36d4f5f37d7.png"
                alt="Dịch vụ giao hàng nhanh"
              ></img>
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <picture>
              <source srcSet="https://file.hstatic.net/200000472237/file/banner_fufilment-01_e0f230a826124044928be7e7351e28ff.png"></source>
              <img
                src="https://file.hstatic.net/200000472237/file/banner_fufilment-01_e0f230a826124044928be7e7351e28ff.png"
                alt="Dịch vụ kho bãi và xử lý hàng hoá"
              ></img>
            </picture>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination tablet:flex mobile:hidden"></div>
    </div>
  );
}
