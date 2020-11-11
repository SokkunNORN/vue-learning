<template>
  <div class="home">
    <div>
      <v-app-bar color="primary" dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <span @click="logout()">{{ getAuthenticate().name }}</span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Option </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
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
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
