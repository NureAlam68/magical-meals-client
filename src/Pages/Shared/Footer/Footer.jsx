import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="flex flex-col md:flex-row md:h-[300px] lg:h-[400px]">
        {/* Left Section */}
      <div className="bg-[#1F2937] p-6 flex-1 flex justify-center items-center">
        <div>
        <h3 className="text-lg font-bold">CONTACT US</h3>
        <p className="mt-6">123 ABS Street, Uni 21, Bangladesh</p>
        <p className="mt-2">+88 123456789</p>
        <p className="mt-2">Mon - Fri: 08:00 - 22:00</p>
        <p className="mt-2">Sat - Sun: 10:00 - 23:00</p>
        </div>
      </div>
      {/* Right Section */}
      <div className="bg-[#111827] p-6 flex-1 flex justify-center items-center">
      <div>
      <h3 className="text-lg font-bold">Follow US</h3>
        <p className="mt-6">Join us on social media</p>
        <div className="flex space-x-4 mt-4">
          <FaFacebookF className="hover:text-gray-400 cursor-pointer text-[25px]" />
          <FaInstagram className="hover:text-gray-400 cursor-pointer text-[25px]" />
          <FaTwitter className="hover:text-gray-400 cursor-pointer text-[25px]" />
        </div>
      </div>
      </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-[#151515] text-center py-4 w-full">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
