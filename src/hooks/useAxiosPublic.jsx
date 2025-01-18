import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://magical-meals-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
