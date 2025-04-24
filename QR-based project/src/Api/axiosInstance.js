// import axios from "axios";

// const axiosInstance=axios.create({
//     baseURL:import.meta.env.VITE_API_BASE_URL,
//     timeout:5000,
// })

// export default axiosInstance 



import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // adjust the key name as needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
