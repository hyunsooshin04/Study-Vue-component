<template>
  <div id="App">
    <Header></Header>
    <Nav></Nav>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Search v-on:words="find"></Search>
    <data-add v-on:add_data="add"></data-add>
    <h1>데이터</h1>
    <DataList v-bind:array="array" v-bind:find_words="world"></DataList>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./components/Search";
import DataAdd from "./components/DataAdd";
import DataList from "./components/DataList";

export default {
  name: 'App',
  components: {
    Search,
    DataAdd,
    DataList,
    Header,
    Nav,
  },
  data() {
    return {
      array: [],
      val: "",
      world: "",
    }
  },
  methods: {
    add(input) {
      this.array.push(input)
    },
    find(find_words) {
      console.log(find_words)
      this.world = find_words;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  border-bottom: 1px solid;
}
</style>
