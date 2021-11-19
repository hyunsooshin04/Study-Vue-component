<template>
  <div style="overflow:scroll; height:200px; width: 300px">
    <h4 v-if="see">총 검색 결과 {{ findItem.length }}개 입니다.
      <button v-on:click="clear">검색 초기화</button>
    </h4>
    <h4 v-if="array.length == 0">현재 존재하는 데이터가 없습니다.</h4>

    <ol>
      <li v-for="(item, index) in findItem" v-bind:key="index"> {{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "DataList",
  props: ['array', 'find_words'],
  data() {
    return {
      tmp: [],
      words: "",
      see: false,
    }
  },
  methods: {
    clear() {
      this.words = "";
      this.see = false;
    }
  },
  watch: {
    array() {
      console.log("값 바뀜.")
      this.tmp.push(this.array[this.array.length - 1])
      console.log(this.tmp)
    },
    find_words() {
      console.log(this.words)
      this.words = this.find_words;
      this.see = true;
    },
  },
  computed: {
    findItem() {
      if (this.words) {
        return this.tmp.filter(function (v) {
          return (v.indexOf(this.words) > -1);
        }, this)
      } else {
        return this.tmp;
      }
    }
  }
}
</script>

<style scoped>
li {
  width: 150px;
  margin: 0px;
  /*padding: 5px 0px 5px 5px;*/
  padding-bottom: 3px;
  margin-bottom: 1px;
  border-bottom: 1px solid grey;
  font-size: 12px;
}

ol {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

button {
  margin: 5px;
  /*  border-color: grey;*/
  /*  background-color: aqua;*/
}
</style>