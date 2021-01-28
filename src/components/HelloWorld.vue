<template>
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
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-divider class="mx-2" vertical ></v-divider>
      
      <v-divider vertical></v-divider>
      <v-spacer></v-spacer>

      <v-card class="hidden-sm-and-down" center-active >
        <v-tabs center-active dark>
          <v-tab>One</v-tab>
          <v-tab>Two</v-tab>
          <v-tab>Three</v-tab>
        </v-tabs>
      </v-card>

      <v-divider vertical></v-divider>
      <v-spacer></v-spacer>
      <Dialog />
      <v-divider vertical></v-divider>
    </v-app-bar>
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
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>

<style  scoped>
.hola {
  background-color: black;
}
</style>