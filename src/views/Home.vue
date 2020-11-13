<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-toolbar-title>Page title</v-toolbar-title>
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

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card
            class="mx-auto mb-4"
            max-width="600"
            v-for="post in posts"
            :key="post.id"
          >
            <v-card-text>
              <v-img
                :src="post.user.profile_photo_url"
                aspect-ratio="1.7"
                width="50"
                height="50"
                class="rounded-circle"
              ></v-img>
              <p class="display-1 text--primary">
                {{ post.user.name }}
              </p>
              <div class="text--primary">
                {{ post.content }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">
                Follow
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="deep-purple accent-4"
                v-if="post.comments.length !== 0"
              >
                {{ post.comments.length }} comments
              </v-btn>
            </v-card-actions>
          </v-card></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
const POST_URL =
  "http://localhost/laravel/learning/api/basic_api/public/api/v1/post";

export default {
  name: "Home",

  created() {
    localStorage.getItem("catchUser")
      ? JSON.parse(localStorage.getItem("catchUser"))
      : this.$router.push("/login");

    this.getPost();
  },

  data: () => {
    return {
      posts: []
    };
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
    },

    async getPost() {
      const { data } = await axios.get(POST_URL, {
        headers: { Authorization: `Bearer ${this.getAuthenticate().token}` }
      });

      this.posts = data.data;

      console.log(this.posts);
    }
  }
};
</script>
