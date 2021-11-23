<template>
  <div class="signup">
    <h1>회원가입</h1>
    Name : <input type="text" v-model="name"><br>
    Id : <input type="text" v-model="id"><br>
    <!--    <button>중복확인</button><br>-->
    pw : <input type="password" v-model="pwd"><br>
    <button v-on:click="signup">signup</button>
  </div>
</template>

<script>
import UserJson from "../user.json"

const userdata = UserJson;


export default {
  name: "signup",
  data() {
    return {
      id: "",
      IdOverlap: true,
      array: [],
      pwd: "",
      userdata,
      name : "",
    }
  },
  methods: {
    signup() {
      this.IdOverlap = true;
      if (this.name == "") {
        alert("Signup : 이름을 입력해주세요.");
      } else if (this.id == "") {
        alert("SignUp : 아이디를 입력해주세요.");
      } else if (this.pwd == "") {
        alert("SignUp : 비밀번호를 입력해주세요.")
      } else {
        for (let i = 0; i < this.array.length; i++) {
          if (this.id == this.array[i].id) {
            this.IdOverlap = false;
            console.log("중복 있음")
          }
        }
        if (this.IdOverlap == true) {
          this.IdOverlap = true;
          this.array.push({id: this.id, pwd: this.pwd, name: this.name})
          alert("회원가입 성공");
          this.id = "";
          this.pwd = "";
          // this.$emit("signup", this.array)
        } else {
          alert("아이디가 중복입니다.");
        }
      }
    }
  },
  created() {
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