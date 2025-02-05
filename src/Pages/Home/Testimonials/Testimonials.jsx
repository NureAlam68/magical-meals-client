import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://magical-meals-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mt-8 md:mt-10 lg:mt-20 xl:mt-[92px] 2xl:px-[300px]">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-6 md:mt-10 lg:mt-[53px]"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-10 md:px-20 2xl:px-[112px] flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-[50px] text-black mt-[24px]" />
              <p className="text-[#444444] font-inter md:text-[20px] mt-6 md:mt-[30px] lg:mt-[48px] text-center">
                {review.details}
              </p>
              <h3 className="text-[#CD9003] text-[24px] md:text-[32px] font-inter font-medium mt-2">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
