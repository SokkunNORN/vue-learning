import axios from "axios";
import { setCachedUser, cache } from "../utils/cache-util";

const LOGIN_URL =
  "http://localhost/laravel/learning/api/basic_api/public/api/v1/login";

export async function login(username, password) {
  sessionStorage.clear();
  const { data } = await axios.post(LOGIN_URL, {
    username: username,
    password: password
  });

  setCachedUser(data);

  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${cache.token}`;
    // eslint-disable-next-line no-empty
  } catch {}
}
