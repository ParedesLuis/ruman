<template>
  <div id="app">
    <header class="bg-blue-900 flex justify-between px-5 items-center">
      <div class="text-indigo-300 font-semibold">LOGO</div>
      <Navbar/>
      <button class="bg-indigo-600 rounded-lg text-indigo-100 py-2 px-5 hover:shadow-inner hover:scale-95">Login</button>
    </header>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


