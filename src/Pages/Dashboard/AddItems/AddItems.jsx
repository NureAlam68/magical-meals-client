import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.image[0]);
    reset();
  };

  return (
    <div className="bg-white min-h-screen pt-5">
      <Helmet>
        <title>Magical Meals | Add Items</title>
      </Helmet>
      <SectionTitle
        heading="ADD AN ITEM"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 mt-5 md:mt-8 lg:mt-[64px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Recipe name*
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full p-2 lg:p-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Recipe name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Category*
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full p-2 lg:p-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              >
                <option value="">Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">Soups</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Price*</label>
              <input
                type="number"
                {...register("price", { required: true })}
                className="w-full p-2 lg:p-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                placeholder="Price"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Recipe Details*
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="w-full p-2 lg:p-4 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Recipe Details"
            />
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#D1A054] text-white py-2 px-4 hover:bg-opacity-80"
          >
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
