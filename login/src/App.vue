<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    /
    <router-link to="/blog">Blog</router-link>
    <br>
    <router-link to="/">Main</router-link>
    <router-view></router-view>
<<<<<<< HEAD
<!--    <h1>user.json data</h1><br>-->
<!--    <h1> Hello {{ key == -1 ? "" : userdata[key].name }} </h1> <br>-->
=======
>>>>>>> parent of c519c90a (11 23)
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
