
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-1 items-center justify-center md:px-10">
          <img
            src="https://via.placeholder.com/400x400"
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
                name='email'
                id="email"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name='password'
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="captcha" className="block text-gray-700 font-medium mb-2">
                Captcha
              </label>
              <div className="flex items-center mb-2">
                <span className="bg-gray-200 px-3 py-2 rounded">UAgIuO</span>
                <button
                  type="button"
                  className="ml-4 text-blue-500 underline focus:outline-none"
                >
                  Reload Captcha
                </button>
              </div>
              <input
                type="text"
                id="captcha"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D1A054B3] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#b58847] transition duration-300"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              New here?{' '}
              <a href="/signup" className="text-blue-500 underline">
                Create a New Account
              </a>
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
                className="text-gray-500 hover:text-red-500 transition duration-300"
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
