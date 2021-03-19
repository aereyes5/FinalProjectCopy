<template>
<b-container class="back">
 <br><h1><span style="text-decoration:underline">Attractions</span></h1><br>  
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[0].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[0].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[1].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[1].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[2].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[2].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[3].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[3].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[4].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[4].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[5].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[5].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[6].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[6].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[7].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[7].name}}</h4>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img v-bind:src="rides[8].image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{rides[8].name}}</h4>
      </div>
    </div>
  </div>
  </div>
</b-container>
</template>


<script>
import visitorServices from '../visitorServices'
export default {
    name: 'Attractions',
    data(){
        return{
            rides: [],
            slide: 0,
        }
    },
    methods: {
 
    },
    mounted(){ 
          visitorServices.rides().then(response => {
            this.rides = response
          })
        
    }
}
</script>

<style scoped>


img{
    height: 60%;
}

.back{
  background-color: white;
}
</style>