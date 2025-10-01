import apiClient from "./axiosInstance";


const getSubscriptions = async () => {
    const res = await apiClient.get(`/Subscriptions/plans`);
    return res.data;
};

const subscriptionServices = {
    getSubscriptions
}

export default subscriptionServices