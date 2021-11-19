<template>
  <div id="data">
    <h1>데이터 추가</h1>
    <input type="text" v-on:keyup.enter="add" v-model="input">
    <button v-on:click="add">데이터 추가하기</button>
  </div>
</template>

<script>
export default {
  name: "DataAdd",
  data() {
    return {
      tmp: "",
      input: "",
    }
  },
  methods: {
    add() {
      if (!this.input) alert("Null값은 추가할수 없습니다.");
      else {
        // console.log("input : " + this.input)
        this.$emit('add_data', this.input)
        this.input = "";
      }
    }
  }
}
</script>

<style scoped>
button {
  margin: 5px;
  /*  border-color: grey;*/
  /*  background-color: aqua;*/
}

/*input {*/
/*  border-color: aqua;*/
/*}*/
</style>