<template>
  <v-app>
    <v-container bg fill-height grid-list-md text-center fluid>
      <v-layout row wrap align-center>
        <v-flex>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-card class="pa-8 mx-auto" max-width="400">
                <v-progress-linear
                  indeterminate
                  :active="isLoading"
                  :top="true"
                  :absolute="true"
                ></v-progress-linear>

                <v-card-text>
                  <div class="text-center login-account-icon-container">
                    <v-icon size="80" color="primary" class="login-icon">{{
                      icons.mdiAccountCircle
                    }}</v-icon>
                  </div>

                  <h2 class="mt-8 mb-8 text-center">Login</h2>

                  <v-text-field
                    label="Username"
                    type="text"
                    :append-icon="icons.mdiAccount"
                    v-model="username"
                    :rules="[() => !!username || 'Username field is required!']"
                    :disabled="isLoading"
                    outlined
                    dense
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    :type="isShowPassword ? 'text' : 'password'"
                    :append-icon="
                      isShowPassword ? icons.mdiEye : icons.mdiEyeOff
                    "
                    @click:append="isShowPassword = !isShowPassword"
                    v-model="password"
                    :rules="[() => !!password || 'Password field is required!']"
                    :disabled="isLoading"
                    outlined
                    dense
                  ></v-text-field>

                  <v-btn
                    class="mb-4 mt-6"
                    color="primary"
                    :disabled="
                      !username || !password ? true : isLoading ? true : false
                    "
                    @click="submit"
                    block
                  >
                    Login
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mdiAccountCircle, mdiAccount, mdiEye, mdiEyeOff } from "@mdi/js";
import axios from "axios";
const LOGIN_URL =
  "http://localhost/laravel/learning/api/basic_api/public/api/v1/login";

export default {
  name: "Login",

  data: () => ({
    username: "",
    password: "",
    icons: {
      mdiAccountCircle,
      mdiAccount,
      mdiEye,
      mdiEyeOff
    },
    isShowPassword: false,
    isLoading: false
  }),

  methods: {
    async submit() {
      this.isLoading = true;
      const { data } = await axios.post(LOGIN_URL, {
        username: this.username,
        password: this.password
      });

      this.isLoading = false;
      console.log(data);
    }
  }
};
</script>

<style scoped>
.login-account-icon-container {
  position: absolute;
  right: 0;
  left: 0;
  top: -40px;
}

.login-icon {
  background-color: white;
  border-radius: 50%;
}
</style>
