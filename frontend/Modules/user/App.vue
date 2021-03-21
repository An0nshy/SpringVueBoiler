<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <img alt="Vue logo" src="/logo.png">
    <p class="bg-info">Hallo von der Vue App</p>
    <User></User>
  </div>
</template>

<script>
// import HelloWorld from './components/User.vue'
import User from './components/User'
export default {
  name: 'App',
  components: {
    User
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
