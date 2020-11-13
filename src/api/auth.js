import axios from "axios";

const LOGIN_URL =
  "http://localhost/laravel/learning/api/basic_api/public/api/v1/login";

export async function login(username, password) {
  const { data } = await axios.post(LOGIN_URL, {
    username: username,
    password: password
  });

  localStorage.setItem("catchUser", JSON.stringify(data));
}
