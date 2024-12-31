import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular")
            setMenu(popularItems)
        })
    }, [])

    return (
        <section className="mt-8 md:mt-10 lg:mt-20 xl:mt-[92px]">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 px-5 xl:px-20 2xl:px-[300px] mt-7 md:mt-10 lg:mt-[48px]">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="px-[30px] py-[20px] rounded-[8px] border-b-[3px] border-black hover:border-[3px] hover:bg-black mt-6 uppercase block mx-auto hover:text-white font-medium">View Full  Menu</button>
        </section>
    );
};

export default PopularMenu;