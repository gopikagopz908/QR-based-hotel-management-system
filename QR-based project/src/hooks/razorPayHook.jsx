import { useCallback } from 'react';
import axiosInstance from '../Api/axiosInstance';

const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const useRazorpayPayment = () => {
  const openRazorpayPayment = useCallback(async (orderData) => {
    const scriptLoaded = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!scriptLoaded) {
      alert('Failed to load Razorpay SDK. Please check your internet connection.');
      return;
    }

    try {
      const { data: order } = await axiosInstance.post('/order/addOrder', {
        name: orderData.name,
        email: orderData.email,
        products: orderData.products,
        total: orderData.total * 100, // in paise
        paymentMethod: 'razorpay',
      });

      const options = {
        key: 'rzp_test_xF615hXrVFeUOx', // Replace with your real key
        amount: order.amount,
        currency: order.currency,
        name: 'Healthy Food App',
        description: 'Payment for your order',
        order_id: order.razorpayOrderId,
        handler: async function (response) {
          const paymentData = {
            ...orderData,
            razorpayId: response.razorpay_payment_id,
            orderId: order.razorpayOrderId,
          };

          await axiosInstance.post('/order/verifypayment', paymentData);
          alert('Payment successful!');
          window.location.reload();
        },
        prefill: {
          name: orderData.name,
          email: orderData.email,
        },
        theme: {
          color: '#3f51b5',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Something went wrong while creating the order. Please try again.');
    }
  }, []);

  return { openRazorpayPayment };
};

export default useRazorpayPayment;

