<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import axios from 'axios'
export default {
  name: 'App',
  data(){
     return{
    }
  },
  components: {
    Navbar
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-image: url("https://img.jakpost.net/c/2019/01/11/2019_01_11_62796_1547182337._large.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

</style>
