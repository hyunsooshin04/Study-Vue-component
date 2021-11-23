<template>
  <div class="login">
    <h1>로그인</h1><br>
    Id : <input type="text" v-model="id"><br>
    pw : <input type="password" v-model="pwd"><br>
    <button v-on:click="login">Login</button>
    {{ array }}
  </div>
</template>

<script>
import UserJson from "../user.json"
const userdata = UserJson;

export default {
  name: "login",
  data() {
    return {
      array: [],
      id: "",
      pwd: "",
      trueId: false,
      userdata
    }
  },
  // props: ['user'],
  watch: {
    user() {
      this.array = this.user;
    },
    userdata() {
      this.array = this.userdata;
    }
  },
  methods: {
    check() {

    },
    login() {
      if (this.id == "") {
        alert("아이디를 입력해주세요.")
      } else if (this.pwd == "") {
        alert("패스워드를 입력해주세요.")
      } else {
        for (let i = 0; i < this.array.length; i++) {
          if (this.id == this.array[i].id) {
            if (this.pwd == this.array[i].pwd) {
              this.trueId = true;
            }
          }
        }
        alert(this.trueId ? "로그인 성공" : "로그인 실패");
        this.id = this.trueId ? "" : this.id;
        this.pwd = this.trueId ? "" : this.pwd;
        this.trueId = false;
      }
    }
  },
  created() {
    this.trueId = false;
    // this.array = this.user;
    this.array = this.userdata;
  }
}
</script>

<style scoped>

input {
  margin: 5px;
  padding: 5px;
}
</style>