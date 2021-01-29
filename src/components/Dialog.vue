<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="500px"
      align-center
      transition="slide-y-transition"
      
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
      <v-card dark class="BRadius">
        <v-card-text>
      <div class="modalContent">
      <v-card-title class="d-flex justify-center" >
          Welcome
        </v-card-title>
          <v-container>
            <v-row>
            
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-container
                class="px-0"
                fluid
              >
              <div class="d-flex justify-space-between align-center">
                <v-checkbox
                  v-model="checkbox"
                  :label="`Remember me`"
                ></v-checkbox>
                <span>Forgot Password?</span>
              </div>
              </v-container>
              <v-btn
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    class="SignB"
                  >
                    Sign In
                  </v-btn>
                  <div class="mAuto">
                  <span>New Here? <link href="#">Create New Account</link></span>
                  </div>
            </v-row>
          </v-container>
                  </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Dialog",
  data: () => ({
    on: false,
    attrs: false,
    dialog: false,
    checkbox: true,
  }),
};
</script>

<style  scoped>
.card {
  color: white
}
.modalContent{
  width:70%;
  padding: 30px 0px;
  margin: auto;
}
.SignB
{
  width: 100%;
  margin: 10px 0px;
}
.mAuto{
  margin:auto;
}
.BRadius{
  border-radius: 20px !important;
  
}
</style>