import PropTypes from "prop-types";


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-5/12">
            <p className="text-[20px] text-[#D99904]">---{subHeading}---</p>
            <h3 className="uppercase border-y-4 py-3 md:py-5 mt-4 text-[24px] md:text-[30px] lg:text-[40px]">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;