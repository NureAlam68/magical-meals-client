import { useQuery } from "@tanstack/react-query";
import { FaWallet, FaUsers, FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { Helmet } from "react-helmet-async";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const statsData = [
    {
      icon: <FaWallet />,
      value: parseFloat(stats.revenue).toFixed(2) || 0,
      label: "Revenue",
      color: "from-purple-500 to-pink-300",
    },
    {
      icon: <FaUsers />,
      value: stats.users || 0,
      label: "Customers",
      color: "from-yellow-500 to-yellow-300",
    },
    {
      icon: <FaBoxOpen />,
      value: stats.menuItems || 0,
      label: "Products",
      color: "from-pink-500 to-pink-300",
    },
    {
      icon: <FaShoppingCart />,
      value: stats.orders || 0,
      label: "Orders",
      color: "from-blue-500 to-blue-300",
    },
  ];

  // custom shape bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map(data => {
    return { name: data.category, value: data.revenue}
  })

  return (
    <div className="p-5">
      <Helmet>
              <title>Magical Meals | Admin Home</title>
            </Helmet>
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
      <div className="flex mt-10">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
