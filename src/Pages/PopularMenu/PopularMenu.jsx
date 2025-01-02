import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === "popular");

    return (
        <section className="mt-8 md:mt-10 lg:mt-20 xl:mt-[92px]">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 px-5 xl:px-20 2xl:px-[300px] mt-7 md:mt-10 lg:mt-[48px]">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
            <Link to="/menu">
            <button className="px-[30px] py-[20px] rounded-[8px] text-[20px] text-[#BB8506] font-inter font-medium border-b-[3px] border-[#BB8506] bg-[#111827] hover:text-white mt-6">VIEW FULL MENU</button>
            </Link>
            </div>
        </section>
    );
};

export default PopularMenu;