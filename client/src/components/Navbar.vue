<template>
<div>
 <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand v-bind:to="'/'">
      <img src="@/assets/webLogo.png" width="50" height="30" class="d-inline-block align-top" alt="rollercoasterIcon">
      Underwater Adventures
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  v-b-tooltip.hover.bottom title="Home" v-bind:to="'/'">Home</b-nav-item>
        <b-nav-item v-b-tooltip.hover.bottom title="Attractions" v-bind:to="'Attractions'">Attractions</b-nav-item>
        <b-nav-item v-b-tooltip.hover.bottom title="Tickets" v-bind:to="'Tickets'" v-if="userToken">Tickets</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item v-b-tooltip.hover.bottom title="Purchases" v-bind:to="'Purchases'" v-model="email" v-if="userToken">
            <b-icon icon="cart4" aria-label="Cart"></b-icon>
        </b-nav-item>
        <b-nav-item-dropdown right v-b-tooltip.hover.bottom title="User">
          <!-- Using 'button-content' slot -->
          <template #button-content>
              <b-icon icon="person-circle" aria-label="User"></b-icon>
          </template>
          <b-dropdown-item v-bind:to="'Account'" v-if="userToken">Account</b-dropdown-item>
          <b-dropdown-item v-bind:to="'Home'" v-if="userToken" @click="logout">Sign Out</b-dropdown-item>
          <b-dropdown-item v-bind:to="'Login'" v-if="!userToken">Sign In</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-bind:to="'FAQ'" v-b-tooltip.hover.bottom title="FAQ">
            <b-icon  icon="question-circle" aria-label="User"></b-icon>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import visitorServices from '../visitorServices'
export default {
  name: "Navbar",
  data(){
    return{
    };
  },

  methods: {
    logout(){
      const token = null
      this.$store.commit('logoutUser', {token})
      this.$router.push('/')
      
    }
  },
  computed:{
    userToken(){
      return this.$store.getters.isValidUser
    }
  },


};
</script>