<template>
  <div id="app">
    <img alt="Vue logo" src="/logo.png">
    <Dashboard />
    <p>Trenner123</p>
    <HelloWorld msg="Profile Site.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dashboard from '../user/components/HelloWorld'
import HelloWorld from "../src/components/HelloWorld";
export default {
  name: 'App',
  components: {
    HelloWorld, Dashboard
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
</style>
