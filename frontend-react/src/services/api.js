import axios from "axios";

const api = axios.create({
  baseURL: "https://boms-business-operation-management-system.onrender.com",
});

export default api;