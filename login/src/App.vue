<template>
  <div id="app">
    <!--    <router-link to="/home">Home</router-link> /-->
    <!--    <router-link to="/about">About</router-link>-->
    <!--    <router-view />-->
    <signup v-bind:user="user"></signup>
    <login v-bind:user="user"></login>
  </div>
</template>

<script>
import login from "./components/login";
import signup from "./components/signup";

export default {
  name: 'App',
  components: {
    login,
    signup
  },
  data() {
    return {
      user: [
        {
          id: "admin",
          pwd: "admin",
        },
        {
          id: "test",
          pwd: "test",
        }
      ],
    }
  }
}
</script>

<style>

</style>
