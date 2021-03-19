<template>
<b-container class="back">
<div>
  <br> <h1><span style="text-decoration:underline">Account Info</span></h1><br>
<b-form> 
  <div class="form-row">
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="First name" id="firstName" v-model="user.firstName" disabled>
      </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="Last name" id="lastName" v-model="user.lastName" disabled>
        
      </b-form-input>
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="Address" id="address" v-model="user.address" disabled>
      </b-form-input>
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="City" id="city" v-model="user.city" disabled>
        </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="State (e.g, TX)" id="state" v-model="user.state" disabled>
      </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="text" class="form-control" placeholder="Zip" id="zip" v-model="user.zip" disabled>
      </b-form-input>
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <b-form-input type="email" class="form-control" placeholder="Email" id="email" v-model="user.email" disabled>
      </b-form-input>
    </div>
    <div class="col">
      <b-form-input type="password" class="form-control" placeholder="Password" id="password" autocomplete="on" v-model="user.password" disabled>
      </b-form-input>
    </div>
  </div><br>
  <b-button variant="warning" v-bind:to="'Update'">Edit</b-button>
  <b-button v-b-modal.modal-1 variant="danger" @click="$bvModal.show('bv-modal-example')">Delete Account</b-button>
<b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Delete Account
    </template>
    <div class="d-block text-center">
      <h3>Are you sure you want to delete your account?</h3>
    </div>
      <b-button variant="info" @click="$bvModal.hide('bv-modal-example')" class="mt-3" block>Back</b-button>
    <b-button variant="danger" type="submit" @click="deleteVisitor" class="mt-3" block>Delete</b-button>
  </b-modal>
  </b-form><br>
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

      deleteVisitor(){
        visitorServices.delete(this.user.email)
        this.$router.push('/')


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
  margin-top: 10%
}
</style>