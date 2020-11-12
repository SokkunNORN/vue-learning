<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-app-title>Page title</v-app-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            {{ getAuthenticate().name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Home",

  created() {
    localStorage.getItem("catchUser")
      ? JSON.parse(localStorage.getItem("catchUser"))
      : this.$router.push("/login");
  },

  data: () => {
    return {};
  },

  methods: {
    getAuthenticate() {
      if (typeof Storage !== "undefined") {
        const localData = localStorage.getItem("catchUser")
          ? JSON.parse(localStorage.getItem("catchUser"))
          : {};

        return localData;
      } else {
        return "Unauthenticate";
      }
    },

    logout() {
      this.$router.push("/login");
      localStorage.clear();
    }
  }
};
</script>
