import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <title>Magical Meals | SignUp</title>
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
                })}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-[#D1A054B3] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#b58847] transition duration-300`}
            >
              Sign Un
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
