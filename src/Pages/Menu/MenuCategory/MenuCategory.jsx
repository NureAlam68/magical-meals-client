import PropTypes from "prop-types";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items, title, img, subTitle}) => {
  return (
    <div>
        {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 px-5 xl:px-20 2xl:px-[300px] mt-7 md:mt-10 lg:mt-[48px] xl:mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
    title: PropTypes.string,
    img: PropTypes.string,
    subTitle: PropTypes.string
};

export default MenuCategory;
