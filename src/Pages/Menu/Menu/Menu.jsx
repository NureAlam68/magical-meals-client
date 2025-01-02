import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Magical Meals | Menu</title>
            </Helmet>
            {/*  main cover */}
            <Cover img={menuImg} title="OUR MENU" subTitle="Would you like to try a dish?"></Cover>
            {/*  offered menu */}
            <section>
            <div className="mt-8 md:mt-10 lg:mt-20 xl:mt-[92px] px-10 2xl:px-[300px]">
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            </div>
            <MenuCategory items={offered}></MenuCategory>
            </section>
            {/* dessert menu */}
            <section className="mt-8 md:mt-10 lg:mt-[45px]">
                <MenuCategory items={desserts} title={"dessert"} img={dessertImg} subTitle={"Sweet indulgences crafted to delight your taste buds, desserts are the perfect ending to any meal."}></MenuCategory>
            </section>
            {/* pizza menu */}
            <section className="mt-8 md:mt-10 lg:mt-[55px]">
                <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} subTitle={"A savory delight loved worldwide, pizza is a perfect blend of crispy crust, rich sauce, melted cheese, and endless toppings."}></MenuCategory>
            </section>
            {/* salad menu */}
            <section className="mt-8 md:mt-10 lg:mt-[55px]">
                <MenuCategory items={salad} img={saladImg} title={"salad"} subTitle={"A refreshing mix of vibrant vegetables, fruits, and greens, salads offer a healthy and flavorful option."}></MenuCategory>
            </section>
            {/* pizza menu */}
            <section className="mt-8 md:mt-10 lg:mt-[55px]">
                <MenuCategory items={soup} img={soupImg} title={"soup"} subTitle={"Warm and comforting, soups are a flavorful blend of ingredients that nourish the soul."}></MenuCategory>
            </section>
        </div>
    );
};

export default Menu;