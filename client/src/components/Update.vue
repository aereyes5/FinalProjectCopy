<template>
<b-container class="back">
<div>
  <br> <h1><span style="text-decoration:underline">Edit Account</span></h1><br>

<b-form @submit.prevent="update"> 
  <div class="form-row">
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="First name" id="firstName" v-model="user.firstName" >
      </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="Last name" id="lastName" v-model="user.lastName" >
        
      </b-form-input>
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="Address" id="address" v-model="user.address" >
      </b-form-input>
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="City" id="city" v-model="user.city" >
        </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="State (e.g, TX)" id="state" v-model="user.state" >
      </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="Zip" id="zip" v-model="user.zip" >
      </b-form-input>
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <b-form-input type="email" class="form-control" placeholder="Email" id="email" v-model="user.email" >
      </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="password" class="form-control" placeholder="Password" id="password" autocomplete="on" v-model="user.password" >
      </b-form-input>
    </div>
  </div><br>
  <b-button v-b-modal.modal-1 variant="success" type="submit" id="save">Save</b-button>
  <b-modal id="modal-1" title="Saved!">
    <p class="my-4">Your account information has been saved!</p>
  </b-modal>
    <b-button id="back" v-bind:to="'Account'">Back</b-button>
  </b-form>
  </div>
  </b-container>
</template>

<script>
import visitorServices from '../visitorServices'
import axios from 'axios'
export default {
    name: 'Account', 
    data (){
        return{
        info:[],
        user: {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          email: '',
          password: ''
        },
        status: null
        }
    },
    methods: {
        findUser(){
        this.user.email =  this.$store.getters.getAccountInfo
        this.foundUser(this.user.email)
      },
       foundUser(email){
        const visitorFound = visitorServices.account(email).then(response => {
          this.info = response
          this.user.firstName = this.info.firstName
          this.user.lastName = this.info.lastName
          this.user.address = this.info.address
          this.user.city = this.info.city
          this.user.state = this.info.state
          this.user.zip = this.info.zip
          this.user.password = this.info.password

        })
      },
      async update(){
            visitorServices.update(this.user)
      },

      back(){
        back.style.visibility = "visible"
      }
      
    },
    mounted(){
        this.findUser()
        

    }
  }

</script>

<style scoped>
.back{
  background-color: white;
  margin-top: 10%;
  height: 100%
}
</style>