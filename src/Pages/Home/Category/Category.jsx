import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 2xl:px-[300px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, // Tablet (small devices)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Laptop
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4, // Desktop
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="w-full h-[400px]" />
          <h3 className="text-[32px] uppercase text-center text-white font-cinzel absolute bottom-10 left-20">
          Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" className="w-full h-[400px]" />
          <h3 className="text-[32px] uppercase text-center absolute bottom-10 left-20 text-white font-cinzel">
          pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" className="w-full h-[400px]" />
          <h3 className="text-[32px] uppercase text-center absolute bottom-10 left-20 text-white font-cinzel">
          Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Slide 4" className="w-full h-[400px]" />
          <h3 className="text-[32px] uppercase text-center absolute bottom-10 left-20 text-white font-cinzel">
          desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Slide 5" className="w-full h-[400px]" />
          <h3 className="text-[32px] uppercase text-center absolute bottom-10 left-20 text-white font-cinzel">
          Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
