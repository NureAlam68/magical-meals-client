import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Magical Meals | Payment History</title>
      </Helmet>
      <SectionTitle
        heading={"PAYMENT HISTORY"}
        subHeading={"At a Glance!"}
      ></SectionTitle>
      <div className="bg-white p-[50px] mt-[68px] min-h-screen">
        <div>
          <h2 className="font-cinzel font-bold lg:text-[24px] xl:text-[32px]">
            Total Payments: {payments.length}
          </h2>
        </div>
        <div className="mt-10">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>EMAIL</th>
                <th>TRANSACTION ID</th>
                <th>TOTAL PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    {item.email}
                  </td>
                  <td>{item.transactionId}</td>
                  <td>${item.price}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
