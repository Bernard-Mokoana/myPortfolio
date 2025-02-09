import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

export const sendMessage = async (formData) =>{
    return await axios.post(`${API_URL}/contact`, formData);
};