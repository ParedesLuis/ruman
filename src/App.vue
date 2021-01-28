<template>
  <v-app>
    <v-main>
      <CustomNavbar />
    </v-main>
  </v-app>
</template>

<script>
import CustomNavbar from "./components/CustomNavbar";

export default {
  name: "App",

  components: {
    CustomNavbar,
  },

  data: () => ({
    //
  }),
};
</script>
