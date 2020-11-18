import axios from "axios";

import { cache } from "../../utils/cache-util";

const instance = axios.create({
  baseURL: "http://localhost/laravel/learning",
  headers: {
    Authorization: `Bearer ${cache.token}`
  }
});

export default instance;
