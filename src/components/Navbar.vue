<template>
  <div id="navbar">
    <button class="bg-hamburguer w-8 h-8 md:hidden block m-5"></button>
    <nav>
      <ul class="md:flex hidden">
        <li class="text-blue-100 font-bold px-5 hover:text-white border-blue-900 hover:border-white border-b-4 cursor-pointer py-3 transition ease-in duration-300">Guide</li>
        <li class="text-blue-100 font-bold px-5 hover:text-white border-blue-900 hover:border-white border-b-4 cursor-pointer py-3 transition ease-in duration-300">Documents</li>
        <li class="text-blue-100 font-bold px-5 hover:text-white border-blue-900 hover:border-white border-b-4 cursor-pointer py-3 transition ease-in duration-300">Components</li>
        <li class="text-blue-100 font-bold px-5 hover:text-white border-blue-900 hover:border-white border-b-4 cursor-pointer py-3 transition ease-in duration-300">License</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
