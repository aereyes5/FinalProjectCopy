<template>
<div>
  <b-container class="back">
 <br>
 <h1><span style="text-decoration:underline">Registration</span></h1><br>
 
<b-form @submit.prevent="addVisitor"> 
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" id="firstName" v-model="person.firstName">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" id="lastName" v-model="person.lastName">
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Address" id="address" v-model="person.address">
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="City" id="city" v-model="person.city">
    </div>
    <div>
      <input type="text" class="form-control" placeholder="State (e.g, TX)" id="state" v-model="person.state">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip" id="zip" v-model="person.zip">
    </div>
  </div><br>
  <div class="form-row">
    <div class="col">
      <input type="email" class="form-control" placeholder="Email" id="email" v-model="person.email">
    </div>
    <div class="col">
      <input type="password" class="form-control" placeholder="Password" id="password" autocomplete="on" v-model="person.password">
    </div><br>
  </div><br>
    <button type="submit" class="btn btn-primary">Submit</button>
  </b-form>
  <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
    {{status}}
  </p>
  </b-container>
  </div>
</template>



<script>
import visitorServices from '../visitorServices'
export default {
    name: 'Registration', 
    data (){
        return{
          person:{
            firstName: null,
            lastName: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            email: null,
            password: null
          },
          status: null,
        }
    },

    methods: {
         async addVisitor(){
          try{
            const newVisitor = visitorServices.register(this.person).then(visitor => {
              console.log(visitor.errors)
              if(Object.keys('newVisitor').includes('errors')){
                this.status = visitor.errors.message
              }else if(visitor.name === 'MongoError') {
                this.status = `${visitor.name} ${JSON.stringify(visitor.keyValue)}`
              }else{
                this.status = null
                this.$router.push({name: 'Login'})
                return visitor
              }
            }).catch((error) => {
              this.status = error
            })
          }catch(error){
            this.status = error
          }

        }

    },
    // mounted(){
    //   visitorServices.states().then(response => {
    //     this.states = response
    //     console.log(response)
    //   })
    // }
   
};


// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();
</script>

<style scoped>
.back{
  background-color: white;
  margin-top: 12%
}
</style>

