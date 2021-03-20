<template>
  <div id="user">
    <img alt="Vue logo" src="/logo.png">
    <User/>
    <p>Trenner123</p>
    <HelloWorld msg="Profile Site.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/User.vue'
import User from './components/User'
import HelloWorld from "../src/components/HelloWorld";
export default {
  name: 'App',
  components: {
    HelloWorld, User
  }
}
</script>
<style>
#user {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
