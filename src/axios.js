import axios from "axios";
import config from "./config";

const email = axios.create({ baseURL: config.apiURL });

const resume = axios.create({ baseURL: config.apiURL });

export default { email, resume };
