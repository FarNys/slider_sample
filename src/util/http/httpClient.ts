import axios from "axios";

export const baseUrl = "https://boxapi.pod.ir/v3/";

const AxiosHttp = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default AxiosHttp;
