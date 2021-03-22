<template>
  <div id="app">
    <form v-on:submit.prevent="userLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="form.username" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter Username">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ errorMessage }} {{ errorCode }}: {{ errorDetail }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      error: false,
      errorCode: '',
      errorMessage: '',
      errorDetail: ''
    }
  },
  methods: {
    userLogin() {
      axios.post('/api/auth/signin', this.form)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          this.errorCode = error.response.status;
          this.errorMessage = error.response.data.message;
          this.errorDetail = error.response.data.error;
          this.error = true;
      })
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
</style>
