<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img
      alt="Dinos Devs Logo"
      class="logo"
      src="@/assets/logoDinosDevs.png"
      width="160"
      height="160"
    />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/informacion">Información</RouterLink>
      <!-- <RouterLink to="/menu">Menú</RouterLink> -->
      <RouterLink to="/juegos">Juegos</RouterLink>
      <RouterLink to="/realidad-aumentada">Realidad Aumentada</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  gap:15px;
  text-decoration: none;
  color:black;
}

nav a:first-of-type {
  margin-left: 0; /* Quitar margen del primer enlace */
}

nav a.router-link-exact-active {
  color: green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    padding-right: 50px;
    margin-top: 1rem;
  }
}
</style>
