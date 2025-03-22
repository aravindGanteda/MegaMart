import axios from "axios";

const megaMartAPI = axios.create({
  baseURL: "https://megamartapi.vercel.app/",
  timeout: 10000, // Adjust timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials in requests
});

export default megaMartAPI;
