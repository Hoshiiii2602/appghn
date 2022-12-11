import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import styles from "./css/detailslide.module.css";

// import required modules
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper";
import { giaoHangNhanhServices } from "../../../services/ghn.services";

export default function DetailSlide() {
    const [detail, setDetail] = useState([])
    useEffect(() => {
       giaoHangNhanhServices.getdataCourse().then(result => setDetail(result.data))
    }, [])

    return (
        <div
            className=
            "bg-[#e8e8e5]  laptop:w-[350px] tablet:w-[550px] tablet:flex tablet:mt-8 tablet:m-auto laptop:mt-0 laptop:pb-[54px] laptop:ml-14 laptop:mr-4 laptop:col-span-1">
            <div
                className=
                "rounded-xl laptop:w-[330px] tablet:w-[530px] m-auto mt-8 overflow-hidden">
                <Swiper
                    effect={"flip"}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay, EffectFlip]}
                    className="mySwiper"
                >
                    {detail.map((partner, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <picture>
                                    <div>
                                        <source srcSet={partner.img}></source>
                                        <img className="imagePartner" src={partner.img}></img>
                                    </div>
                                    <div className="text-center pt-[1px] bg-[#e8e8e5]">
                                        <div className="mt-4 mb-2">
                                            <img className={styles.logo} src={partner.logo}></img>
                                        </div>
                                        <p
                                            className=
                                            "text-2xl leading-loose text-[#4a5c71] font-[350]">
                                            {partner.textQuote}
                                        </p>
                                        <p
                                            className="mt-12">{partner.discripttion}
                                        </p>
                                        <p
                                            className=
                                            "text-2xl leading-loose text-[#4a5c71] font-[350]">
                                            {partner.disc2}
                                        </p>
                                    </div>
                                </picture>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

