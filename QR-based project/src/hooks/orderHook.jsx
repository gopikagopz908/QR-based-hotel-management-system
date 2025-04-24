import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';

const useOrder = () => {
  return useMutation({
    mutationFn: async (orderData) => {
      const { data } = await axiosInstance.post('/order/addOrder', {
        products: orderData.items,
        total: orderData.total * 100, 
        paymentMethod: 'razorpay',
      });
      return data;
    },
  });
};

export default useOrder;
