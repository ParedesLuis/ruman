<template>
  <v-app>
      <NavBar/>
      <Content/>
  </v-app>
</template>

<style>
.content{
  width: 50%;
  margin: 70px auto;
}
</style>

<script>
import NavBar from './components/NavBar';
import Content from './components/Content';
export default {
  name: 'App',

  components: {
    NavBar,
    Content
  },

  data: () => ({
    //
  }),
};
</script>
