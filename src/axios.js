import axios from 'axios';
import Config from "./Config";

const instance = axios.create({ baseURL: Config.apiURL });

export default instance;