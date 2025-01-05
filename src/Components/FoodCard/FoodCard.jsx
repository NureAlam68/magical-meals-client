import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = food => {
      if(user && user.email) {
        ""
      }
      else{
        Swal.fire({
          title: "You are not Logged In!",
          text: "Please login for add to the cart.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login")
          }
        });
      }
    }
  return (
    <div className="card bg-[#F3F3F3] rounded-none">
      <figure>
        <img
          src={image}
          className="w-full"
        />
      </figure>
      <p className="font-inter bg-[#111827] text-white font-semibold absolute top-5 right-5 px-[22px] py-[11px]">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="font-inter text-[24px] font-semibold text-center">{name}</h2>
        <p className="font-inter text-[#737373]">{recipe}</p>
        <div className="card-actions justify-center mt-6">
          <button
          onClick={() => handleAddToCart(item)}
          className="bg-[#E8E8E8] px-[30px] py-[20px] rounded-[8px] text-[20px] text-[#BB8506] font-inter font-medium border-b-[3px] border-[#BB8506] hover:bg-[#111827]">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default FoodCard;
