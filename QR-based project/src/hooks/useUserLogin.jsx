import { useState } from "react";
import axiosInstance from "../Api/axiosInstance";

function useUserLogin() {
  const [loading, setLoading] = useState(false);

  const usersLogin = async (data) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/user/userLogin", data);
      console.log(res.data);
      // You can update state with response here if needed
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, usersLogin };
}

export default useUserLogin;
