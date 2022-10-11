import React from "react";
import Image from "next/image";
import classes from "./carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                <Image
                  src="/image/Carousel/typeButton.png"
                  alt="Botones arriba"
                  width={700}
                  height={200}
                />
              </div>
              <div className={classes.firstSlide__buttonBot}>
                <div>
                  <Image
                    scr="/image/Carousel/dbsBills.png"
                    alt="Bills-DragonBallSuper"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    scr="/image/Carousel/ballDog.png"
                    alt="Bills-DragonBallSuper"
                    width={500}
                    height={500}
                  />
                  <Image
                    scr="/image/Carousel/ballCat.png"
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
