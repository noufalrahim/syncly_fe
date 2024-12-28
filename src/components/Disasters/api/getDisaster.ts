import { BASE_URL } from "@/constants";
import axios from "axios";

export const getDisaster = async () => {
    const response = await axios.get(`${BASE_URL}/disaster`)
    console.log(response);
    return response;
};