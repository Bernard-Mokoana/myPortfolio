import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "https://myportfolio-backend-wsqu.onrender.com";

export const sendMessage = async (formData) => {
    return await axios.post(`${API_URL}/contact`, formData);
};