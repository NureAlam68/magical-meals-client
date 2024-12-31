import PropTypes from "prop-types";


const MenuItem = ({item}) => {
    const { name, image, price, recipe } = item
    return (
        <div className="flex gap-4 lg:gap-8">
            <img style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" className="w-[118px] h-[104px]" />
            <div>
                <h3 className="uppercase lg:text-[20px] font-cinzel">{name} ---------</h3>
                <p className="font-inter text-[#737373] text-sm md:text-base mt-1 md:mt-2">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-inter">${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object
}

export default MenuItem;