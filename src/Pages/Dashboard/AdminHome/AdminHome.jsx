import { useQuery } from "@tanstack/react-query";
import { FaWallet, FaUsers, FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const statsData = [
    { icon: <FaWallet />, value: stats.revenue.toFixed(2) || 0, label: "Revenue", color: "from-purple-500 to-pink-300" },
    { icon: <FaUsers />, value: stats.users || 0, label: "Customers", color: "from-yellow-500 to-yellow-300" },
    { icon: <FaBoxOpen />, value: stats.menuItems || 0, label: "Products", color: "from-pink-500 to-pink-300" },
    { icon: <FaShoppingCart />, value: stats.orders || 0, label: "Orders", color: "from-blue-500 to-blue-300" },
  ];

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-5 font-cinzel">
        Hi, Welcome {user?.displayName ? user.displayName : "Back"}!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-inter">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`p-5 bg-gradient-to-r ${stat.color} text-white rounded-lg shadow-md flex items-center gap-4`}
          >
            <div className="text-4xl">{stat.icon}</div>
            <div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
