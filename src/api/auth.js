import axios from "./index";
import { setCachedUser } from "../utils/cache-util";

const LOGIN_URL = "/api/basic_api/public/api/v1/login";

export async function login(username, password) {
  sessionStorage.clear();
  const { data } = await axios.post(LOGIN_URL, {
    username: username,
    password: password
  });

  if (data.status.errorCode == 0) {
    setCachedUser(data.data);
  }
}
