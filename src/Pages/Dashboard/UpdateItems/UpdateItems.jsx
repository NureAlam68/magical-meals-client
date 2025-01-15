import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const { name, recipe, price, category, _id} = useLoaderData();
//   console.log(name)
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(data.image[0]);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu item to the server with image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          title: `${data.name} is updated to the menu.`,
          icon: "success",
          draggable: true,
        });
      }
    }
    // console.log(res.data);
  };

  return (
    <div className="bg-white min-h-screen pt-5">
      <Helmet>
        <title>Magical Meals | Update Items</title>
      </Helmet>
      <SectionTitle
        heading={"UPDATE ITEM"}
        subHeading={"Are you sure?"}
      ></SectionTitle>
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 mt-5 md:mt-8 lg:mt-[64px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Recipe name*
            </label>
            <input
            defaultValue={name}
              {...register("name", { required: true })}
              className="w-full p-2 lg:p-3 border rounded-md focus:outline-none focus:ring focus:ring-[#D1A054]"
              placeholder="Recipe name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Category*
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="w-full p-2 lg:p-3 border rounded-md focus:outline-none focus:ring focus:ring-[#D1A054]"
              >
                <option disabled value="default">
                  Select Category
                </option>
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
              defaultValue={price}
                type="number"
                {...register("price", { required: true })}
                className="w-full p-2 lg:p-3 border rounded-md focus:outline-none focus:ring focus:ring-[#D1A054]"
                placeholder="Price"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Recipe Details*
            </label>
            <textarea
            defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="w-full p-2 lg:p-4 border rounded-md focus:outline-none focus:ring focus:ring-[#D1A054]"
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
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
