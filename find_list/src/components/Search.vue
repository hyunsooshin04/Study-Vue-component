<template>
  <div>
    <h1>데이터 검색</h1>
    <input type="text" v-model="find_words" v-on:keyup.enter="FindData">
    <button v-on:click="FindData">검색하기</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      find_words: "",
    }
  },
  methods: {
    FindData() {
      if (!this.find_words) alert("Null값은 검색하실수 없습니다.");
      else {
        console.log(this.find_words)
        this.$emit("words", this.find_words);
      }
    }
  },
  props: {

  },
  watch: {
  }
}
</script>

<style scoped>
button {
  margin: 5px;
  /*  border-color: grey;*/
  /*  background-color: aqua;*/
}
</style>