<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
      align-center
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Login
        </v-btn>
      </template>
      <v-card dark class="card">
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              
              <v-btn
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Enter
                  </v-btn>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Dialog",
  data: () => ({
    dialog: false,
  }),
};
</script>

<style  scoped>
.card {
  color: white
}
</style>