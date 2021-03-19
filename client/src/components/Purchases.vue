<template>
    <div >
        <b-container class="back">
        <br><h1>
            <span style="text-decoration:underline">Purchase History</span>
        </h1><br>
        
    <table class="history" style="width:90%">
        <tr>
            <th>Email</th>
            <th>Adult Tickets</th>
            <th>Kids Tickets</th>
            <th>Total Price</th>
            <th>Visit Date</th>
            <th>Purchase Date</th>
            <th>Status</th>
            <th>Cancel</th>
        </tr>
        <tr v-for="(item, index) in history" :key="index">
            <td>{{item.email}}</td>
            <td>{{item.adultTickets}}</td>
            <td>{{item.kidsTickets}}</td>
            <td>{{item.totalPrice}}</td>
            <td>{{item.visitDate}}</td>
            <td>{{item.purchaseDate}}</td>
            <td>{{item.status}}</td>
            <td><b-button variant="danger" @click="cancel(item.purchaseDate);$bvModal.show('bv-modal-example')">Cancel</b-button></td>
        </tr>
    </table>
    <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Purchase Cancelled
    </template>
    <div class="d-block text-center">
      <h3>Your purchase has been cancelled!</h3>
    </div>
      <b-button variant="primary" @click="$bvModal.hide('bv-modal-example'); load()" class="mt-3" block>Okay</b-button>
  </b-modal>
    </b-container>
  </div>
</template>

<script>
import visitorServices from '../visitorServices'
export default {
    name: 'Purchases',
    data(){
        return{
            history: [],
            purchase:{
                   email: '',
                   adultTickets: '',
                   kidsTickets: '',
                   totalPrice: '',
                   visitDate: '',
                   purchaseDate: '',
                   status: ''
               },
            selected: null
        }
        
    },
    methods: {
        cancel(date){
            this.selected = date
            visitorServices.cancel(this.selected)
        },

        load(){
          this.purchase.email = this.$store.getters.getAccountInfo
            visitorServices.history(this.purchase.email).then(response => {
            this.history = response
            console.log(this.history)
            })
        }

        
    },
    created(){ 
            this.load()
    }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* .history{
  margin-left: auto;
  margin-right: auto;
} */
.back{
  background-color: white;
}
</style> 