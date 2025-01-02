import PropTypes from "prop-types";

const Cover = ({ img, title, subTitle }) => {
  return (
    <div
      className="hero h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] bg-fixed"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="bg-[#15151599] p-8 md:p-20 xl:py-[145px] mt-10 lg:mt-[110px] xl:w-[1320px] mx-auto">
          <h1 className="font-cinzel text-[24px] md:text-[36px] lg:text-[50px] 2xl:text-[88px] font-bold">{title}</h1>
          <p className="mt-2 font-cinzel md:text-[20px] lg:text-[24px] uppercase font-semibold">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Cover;
