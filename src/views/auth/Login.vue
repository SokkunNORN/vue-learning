<template>
  <v-app>
      <v-container bg fill-height grid-list-md text-center fluid>
        <v-layout row wrap align-center>
          <v-flex>
            <v-row  align="center" justify="center">
              <v-col
                cols="12">
                <v-card
                  class="pa-8 mx-auto"
                  max-width="400">
                  <h2 class="mt-6 mb-6 text-center">Login</h2>

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