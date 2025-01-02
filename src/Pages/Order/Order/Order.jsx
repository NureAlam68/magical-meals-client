import { Helmet } from "react-helmet-async";
import orderBg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // You can remove this if overriding styles entirely
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import "./Order.css"; // Create and use a custom CSS file

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Magical Meals | Order</title>
      </Helmet>
      <Cover
        img={orderBg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <div className="mt-8 md:mt-10 lg:mt-20 2xl:mt-[130px]">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="max-w-[680px] mx-auto custom-tab-container">
            <TabList className="custom-tab-list">
              <Tab
                className="custom-tab"
                selectedClassName="custom-tab-active"
              >
                SALAD
              </Tab>
              <Tab
                className="custom-tab"
                selectedClassName="custom-tab-active"
              >
                PIZZA
              </Tab>
              <Tab
                className="custom-tab"
                selectedClassName="custom-tab-active"
              >
                SOUPS
              </Tab>
              <Tab
                className="custom-tab"
                selectedClassName="custom-tab-active"
              >
                DESSERTS
              </Tab>
              <Tab
                className="custom-tab"
                selectedClassName="custom-tab-active"
              >
                DRINKS
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-20 2xl:px-[300px] mt-7 md:mt-10 lg:mt-[48px]">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
