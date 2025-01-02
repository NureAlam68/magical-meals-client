import PropTypes from "prop-types";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 px-5 xl:px-20 2xl:px-[300px] mt-7 md:mt-10 lg:mt-[48px] xl:mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {
        title && <div className="flex justify-center mt-10">
          <Link to={`/order/${title}`}>
        <button className="bg-[#E8E8E8] px-[30px] py-[20px] rounded-[8px] text-[20px] text-[#BB8506] font-inter font-medium border-b-[3px] border-[#BB8506] hover:bg-[#111827]">ORDER FOOD</button>
      </Link>
        </div>
      }
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  img: PropTypes.string,
  subTitle: PropTypes.string,
};

export default MenuCategory;
