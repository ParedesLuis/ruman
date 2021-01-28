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
        
        
        <v-toolbar-title class="hidden-sm-and-down" >Page Title</v-toolbar-title>
        <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
        
        <v-spacer></v-spacer>

        <v-card class="hidden-sm-and-down" centered color="black">
          <v-tabs dark background-color="black">
            <v-tab>Guie</v-tab>
            <v-tab>Documents</v-tab>
            <v-tab>Components</v-tab>
            <v-tab>Licenses</v-tab>
          </v-tabs>
        </v-card>

        <v-spacer></v-spacer>
        <Dialog />
        <v-divider vertical></v-divider>
      </v-app-bar>
    </div>

    <div class="center">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "HelloWorld",
  components: {
    Dialog,
  },
  data: () => ({
    hola: true,
    desserts: [
      {
        name: "probando",
        calories: "nose",
      },
      {
        name: "probando",
        calories: "nose",
      },
      {
        name: "probando",
        calories: "nose",
      },
      {
        name: "probando",
        calories: "nose",
      },
      {
        name: "probando",
        calories: "nose",
      },
    ],
  }),
};
</script>

<style  scoped>
.center {
  margin: 100px auto;
  width: 80%;
}
</style>