import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="px-5 py-5 md:px-8 md:py-10 lg:px-[100px] lg:py-[60px] xl:px-[200px] xl:py-[100px] 2xl:px-[300px] 2xl:py-[130px] mt-8 md:mt-10 lg:mt-20 xl:mt-[92px] relative bg-cover bg-center text-white bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${featuredImg})`,
      }}
    >
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
      <div className="md:flex justify-center items-center mt-[48px] md:gap-6 xl:gap-[68px]">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white mt-4 md:mt-0">
          <p>Feb 20, 2025</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Our food menu offers a delightful selection of dishes crafted with
            the freshest ingredients. From savory appetizers to indulgent
            desserts, we cater to all tastes and dietary preferences. Each item is thoughtfully prepared to provide a memorable culinary experience.
          </p>
          <button className="px-[30px] py-[20px] rounded-[8px] border-b-[3px] hover:border-[3px] mt-6 uppercase">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
