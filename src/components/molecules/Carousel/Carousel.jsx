import React from "react";
import Image from "next/image";
import classes from "./carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TypeButton } from "../../atoms/TypeButton/TypeButton";

export const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className={classes.firstSlide}>
            <div className={classes.firstSlide__left}>
              <Image
                src="/image/Carousel/ballsLeft.png"
                alt="Bollas de izquierda"
                width={200}
                height={350}
              />
            </div>
            <div className={classes.firstSlide__rigth}>
              <div className={classes.firstSlide__buttonTop}>
                <TypeButton />
              </div>
              <div className={classes.firstSlide__buttonBot}>
                <div>
                  <Image
                    src="/image/Carousel/dbsBills.png"
                    alt="Bills-DragonBallSuper"
                    width={500}
                    height={500}
                  />
                </div>
                <div className={classes.firstSlide__balls}>
                  <Image
                    src="/image/Carousel/ballDog.png"
                    alt="Bills-DragonBallSuper"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/image/Carousel/ballCat.png"
                    alt="Bills-DragonBallSuper"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
