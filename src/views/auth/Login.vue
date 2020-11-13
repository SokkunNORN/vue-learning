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
                  <v-form @submit.prevent="submit">
                    <v-text-field
                      label="Username"
                      type="text"
                      :append-icon="icons.mdiAccount"
                      v-model="username"
                      :rules="[
                        () => !!username || 'Username field is required!'
                      ]"
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
                      :rules="[
                        () => !!password || 'Password field is required!'
                      ]"
                      :disabled="isLoading"
                      outlined
                      dense
                    ></v-text-field>

                    <v-btn
                      class="mb-4 mt-6"
                      color="primary"
                      type="submit"
                      :disabled="
                        !username || !password ? true : isLoading ? true : false
                      "
                      block
                    >
                      Login
                    </v-btn>
                  </v-form>
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
import { login } from "../../api/auth";

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
      await login(this.username, this.password);
      this.isLoading = false;
      this.$router.push("/");
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
