<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Section from "./components/Section"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Section,
    Footer
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
#header {
  background-color: lightgrey;
  height: 10vh;
  padding-bottom: 3vh;
}

#nav {
  background-color: #339999;
  color: white;
  width: 19%;
  height: 70vh;
  float: left;
}

#section {
  background-color: red;
  width: 81%;
  height: 70vh;
  float: right;
  text-align: left;
}

#footer {
  background-color: #FFCC00;
  height: 100px;
  clear: both;
}

#header, #nav, #section, #footer {
  text-align: center
}

#header, #footer {
  line-height: 100px
}

#nav, #section {
  line-height: 240px;
}
</style>
