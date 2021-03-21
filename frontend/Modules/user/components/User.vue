<template>
  <div id="user" class="bg-danger">
    <h1>hallo vom Vue Component</h1>
    <h1>{{ viewModel.name }}</h1>
    <h2>user.vue</h2>
  </div>
</template>

<script>
import axios from "axios";

export default{
  name: 'User',

  data() {
    return {
      viewModel: {
        name: ''
      }
    }
  },
  created() {
    axios.get("/api/test/fetch", {
      params: {}
    })
        .then((response) => {
          console.log(response.data)
          this.viewModel = response.data
        })
        .catch((error) => {
          console.log(error.response);
          this.viewModel.message = "Something went wrong, please check your data and try again."
        });
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
