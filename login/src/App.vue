<template>
  <div id="app">

    <router-link to="/login">Login</router-link>
    /
    <router-link to="/signup">Signup</router-link>
    <br>
    <router-link to="/">Main</router-link>
    <router-view></router-view>
<!--    <h1>user.json data</h1><br>-->
<!--    <h1> Hello {{ key == -1 ? "" : userdata[key].name }} </h1> <br>-->
  </div>
</template>

<script>
import UserJson from "./user.json";

const userdata = UserJson;

export default {
  name: 'App',
  components: {},
  data() {
    return {
      userdata,
      key: -1,
      login : false,
      // user: [
      //   {
      //     id: "admin",
      //     pwd: "admin",
      //   },
      //   {
      //     id: "test",
      //     pwd: "test",
      //   }
      // ],
    }
  },
  watch: {
    userdata() {
      for (let i = 0; i < this.userdata.length; i++) {
        if (this.userdata[i].id == "login") {
          if (this.userdata[i].pwd == "login") {
            if (this.userdata[i].name == "login") {
              this.key = localStorage.getItem("login");
            }
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
