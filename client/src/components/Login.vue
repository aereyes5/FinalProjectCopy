<template>
<div>
 <b-container class="back">
<br>
 <h1><span style="text-decoration:underline">Login</span></h1><br>  
  <b-form @submit.prevent="login">
    <label for="text-email" >Email:</label>
    <b-form-input type="email" id="text-email" v-model="user.email" placeholder="Please Enter Email"></b-form-input><br>
    <label for="text-password" >Password:</label>
    <b-form-input type="password" id="text-password" autocomplete="on" v-model="user.password" placeholder="Please Enter Password"></b-form-input>
    <p>Don't have an account? Register <b-link v-bind:to="'/register'">here</b-link></p>
    <b-button variant="primary" type="submit">Login</b-button>
   </b-form>
      </b-container>
   <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
     {{status}}
   </p>
</div>
</template>

<script>
import visitorServices from '../visitorServices'
export default {
  name: "Login",
  data(){
    return{
      user:{
        email: null,
        password: null,
        token: null
      },
      status: null
    }
  },
  methods: {
    async login(){
      try{
        const visitorFound = visitorServices.login(this.user).then(visitor => {
          this.status = null
          console.log(visitorFound)
          this.storeToken(visitor.foundVisitor.email,visitor.foundVisitor.password, visitor.token)
          this.$router.push('/')
          return visitor
        }).catch((error) => {
          console.log(error)
          this.status = error
        })
       
      }catch(error){
        console.log(error)
        this.status = error
      }

    },
    storeToken(email, password, token){
      this.$store.commit('loginUser', {email, password, token})
    },


  },  
  computed:{
    userToken(){
      return this.$store.getters.isValidUser
    }
  },
  mounted(){
    if(this.userToken == true){
      this.user = this.$store.getters.isValidUser
      this.email = this.$store.getters.getAccountInfo
      this.token = this.$store.getters.getToken
      console.log(this.user)
      console.log(this.email)
      console.log(this.token)
    }
  }

}
</script>

<style scoped>
label{
  float: left;
}
.back{
  background-color: white;
  margin-top: 12%
}
</style>