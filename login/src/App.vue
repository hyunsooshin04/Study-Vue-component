<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    /
    <router-link to="/blog">Blog</router-link>
    <br>
    <router-link to="/">Main</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
