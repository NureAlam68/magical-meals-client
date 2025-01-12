import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, signInWithGoogle, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          setUser((prevUser) => {
            return {
              ...prevUser,
              displayName: data.name,
              photoURL: data.photoURL,
            };
          });
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          toast.error("Error updating user profile", { error });
        });
    });
  };

  // Google Sign-in
const handleGoogleLogIn = async () => {
  try {
    const res = await signInWithGoogle();
    const userInfo = {
      email: res.user?.email,
      name: res.user?.displayName,
    };

    const response = await axiosPublic.post("/users", userInfo);
    
    if (response.data.insertedId || response.data.insertedId === null) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User login successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  } catch (err) {
    toast.error(err?.message || "Something went wrong!");
  }
};

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Magical Meals | Sign Up</title>
      </Helmet>
      <div className="w-full max-w-4xl shadow-2xl rounded-lg flex flex-col md:flex-row-reverse">
        {/* Right Side - Image */}
        <div className="hidden md:flex flex-1 items-center justify-center md:px-10 bg-white">
          <img
            src={loginImg}
            alt="Cafe Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Left Side - Form */}
        <div className="flex-1 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                id="name"
                placeholder="Type your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo Url
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                name="photoURL"
                id="photoURL"
                placeholder="Photo URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
              {errors.photoURL && (
                <span className="text-red-500">Photo Url is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                id="email"
                placeholder="Type your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have one uppercase, lowercase, special character
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-[#D1A054B3] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#b58847] transition duration-300`}
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-[#D1A054] underline font-semibold"
              >
                Go to logIn
              </Link>
            </p>

            <div className="text-center text-sm text-gray-500 mt-4">
              Or sign up with
            </div>

            <div className="flex justify-center mt-4 space-x-4">
              <button
                type="button"
                className="text-gray-500 hover:text-blue-700 transition duration-300"
              >
                <FaFacebook size={24} />
              </button>
              <button
                onClick={handleGoogleLogIn}
                type="button"
                className="text-gray-500 hover:text-[#D1A054] transition duration-300"
              >
                <FaGoogle size={24} />
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800 transition duration-300"
              >
                <FaGithub size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
