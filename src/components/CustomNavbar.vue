<template>
  <div>
    <div class="navbar-container">
      <a class="brand"> Walls Team</a>
      <ul>
        <li class="menu-item">
          <a>About us</a>
        </li>
        <li class="menu-item">
          <a>Team</a>
        </li>
        <li class="menu-item">
          <a>Tech</a>
        </li>
        <li class="menu-item">
          <a>Contact</a>
        </li>
        <li class="hamburguer-button">
          <i class="fas fa-bars menu-button" @click="handleToShow"></i>
        </li>
      </ul>
    </div>
    <ul class="responsive-menu" v-show="show">
      <li class="responsive-menu-item">
        <a>About us</a>
      </li>
      <li class="responsive-menu-item">
        <a>Team</a>
      </li>
      <li class="responsive-menu-item">
        <a>Tech</a>
      </li>
      <li class="responsive-menu-item">
        <a>Contact</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CustomNavbar",
  data: () => ({
    show: false,
  }),
  methods: {
    handleToShow() {
      this.show = !this.show;
    },
  },
};
</script>
<style>
.navbar-container {
  height: 7vh;
  background: #183153;
  display: flex;
  align-items: center;
  padding: 0 2% 0 4%;
  justify-content: space-between;
}

.navbar-container > .brand {
  color: white;
  font-size: 1.5em;
}

.navbar-container > ul {
  display: flex;
  width: 40%;
  justify-content: space-around;
  list-style: none;
}

.menu-item a {
  color: white !important;
  text-decoration: none;
}

.hamburguer-button {
  color: white;
}

.responsive-menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0 !important;
  background: #183153;
}

.responsive-menu li {
  width: 100%;
  text-align: center;
  padding: 20px;
}

.responsive-menu li:hover {
  border: 1px solid white;
}

.responsive-menu a {
  color: white !important;
}

@media (min-width: 769px) {
  .hamburguer-button {
    display: none;
  }

  .responsive-menu {
    display: none;
  }
}

@media (max-width: 768px) {
  .menu-item a {
    display: none;
  }
}
</style>
