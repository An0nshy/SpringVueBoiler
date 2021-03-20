<template>
  <div id="helloWorld">
    <img alt="Vue logo" src="/img/logo.png">
    <h1>INDEX SEITE LÄSST GRÜSSEN</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Hello World',
  components: {
    HelloWorld
  }
}
</script>

<style>

#helloWorld {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
