import { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginBg from "../../assets/others/authentication.png"
import loginImg from "../../assets/others/authentication2.png"
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [validateDisabled, setValidateDisabled] = useState(false);

  useEffect(() => {
    try {
      loadCaptchaEnginge(6);
    } catch (error) {
      toast.error("Error initializing CAPTCHA:", error);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
    .then(result => {
      const user = result.user;
    })
  };

  const handleValidateCaptcha = () => {
    const captcha = captchaRef.current.value;

    if (validateCaptcha(captcha)) {
      toast.success("CAPTCHA Validated");
      setDisabled(false);
      setValidateDisabled(true); // Disable the validate button
    } else {
      toast.error("CAPTCHA is incorrect. Please try again.");
      setDisabled(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" 
    style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <Helmet>
        <title>Magical Meals | Login</title>
      </Helmet>
      <div className="w-full max-w-4xl shadow-2xl rounded-lg flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-1 items-center justify-center md:px-10 bg-white">
          <img
            src={loginImg}
            alt="Cafe Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="captcha" className="block text-gray-700 font-medium mb-2">
                CAPTCHA Verification
              </label>
              <LoadCanvasTemplate />

              <input
                type="text"
                ref={captchaRef}
                id="captcha"
                placeholder="Type the above characters here"
                name="captcha"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100 mt-2"
              />
              <button
                onClick={handleValidateCaptcha}
                type="button"
                disabled={validateDisabled}
                className={`w-full bg-[#D1A054B3] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#b58847] transition duration-300 mt-2 ${
                  validateDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Validate CAPTCHA
              </button>
            </div>

            <button
              disabled={disabled}
              type="submit"
              className={`w-full bg-[#D1A054B3] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#b58847] transition duration-300 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              New here?{' '}
              <Link to="/signup" className="text-[#D1A054] underline font-semibold">
                Create  New Account
              </Link>
            </p>

            <div className="text-center text-sm text-gray-500 mt-4">Or sign in with</div>

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

export default Login;
