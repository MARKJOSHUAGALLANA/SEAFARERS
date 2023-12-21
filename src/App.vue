<template>
  <div id="app">
    <router-link class="nav-link" to="/users">User</router-link>
    <router-link class="nav-link" to="/bookings">Booking</router-link>
    <router-link class="nav-link" to="/venues">Venue</router-link>
  </div>
    <div class="content">
      <router-view />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

#app {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ab164fce;
}
.nav-link {
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #eee;
  color: #3e464f;
  transform: scale(1.1);
}
div {
    display: block;
    background-image: url('https://th.bing.com/th/id/OIF.2c365z2g4vdew4awYa9pkA?rs=1&pid=ImgDetMain');
}
div[data-v-7a7a37b1] {
    display: block;
    background-size: cover;
    background-color: #ab164fce;
    
}
th[data-v-b64327df], td[data-v-b64327df] {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}
</style>
