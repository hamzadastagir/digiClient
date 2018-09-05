import axios from 'axios';
import {baseApiUrl} from "./constants";

axios.defaults.baseURL = {baseApiUrl};

export const axiosClient = axios.create({
  baseURL: {baseApiUrl}
});
