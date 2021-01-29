<template>
  <div>
    <div>
      <v-app-bar
        absolute
        color="black"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        dense
        dark
        flat
      >
        <v-divider class="sm-2" vertical></v-divider>

        <v-toolbar-title class="hidden-sm-and-down">Page Title</v-toolbar-title>

        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <!--List Element-->
        <v-spacer></v-spacer>
        <v-card class="hidden-sm-and-down" centered color="black">
          <v-tabs dark background-color="black">
            <v-tab>Guie</v-tab>
            <v-tab>Documents</v-tab>
            <v-tab>Components</v-tab>
            <v-tab>Licenses</v-tab>
          </v-tabs>
        </v-card>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          color="black"
          height="100vh"
        >
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Guie</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Documents</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Components</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Licenses</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <!--Login Modal-->
        <v-spacer></v-spacer>
        <Dialog />
      </v-app-bar>
    </div>

    
  </div>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "NavBar",
  components: {
    Dialog,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  data: () => ({
    drawer: false,
    group: null,
   
  }),
};
</script>

<style  scoped>
.center {
  margin: 100px auto;
  width: 80%;
}
</style>