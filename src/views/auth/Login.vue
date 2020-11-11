<template>
  <v-app>
      <v-container bg fill-height grid-list-md text-center>
        <v-layout row wrap align-center>
          <v-flex>
            <v-row  align="center" justify="center">
              <v-col
                cols="4">
                <v-card
                  class="pa-6">
                  <h2 class="mt-4 mb-4 text-center">Login</h2>

                  <v-card-text>
                    <v-text-field
                      label="Username"
                      type="text"
                      outlined
                      dense
                    ></v-text-field>

                    
                    <v-text-field
                      label="Password"
                      type="password"
                      outlined
                      dense
                    ></v-text-field>

                    <v-btn
                      class="mb-4 mt-4"
                      color="error"
                      disabled
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
export default {
  name: "Login",

  data: () => ({
    
  })
}
</script>

<style>

</style>