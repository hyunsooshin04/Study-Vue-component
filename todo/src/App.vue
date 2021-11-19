<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addevent="addevent"></TodoInput>
    <TodoList v-bind:input="input" v-bind:clear="clear"></TodoList>
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      input: "",
      clear: "",
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
  methods: {
    addevent(input) {
      this.input = input;
      console.log("emit : " + this.input)
    },
    clearAll(value) {
      this.clear = value;
    }
  },
  watch: {
    // value() {
    //   console.log(this.value)
    // }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 70%;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>