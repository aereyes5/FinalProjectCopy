<template>
<div>
        <b-container class="back">
    <br> <h1><span style="text-decoration:underline">Purchase Tickets</span></h1><br>

<b-form @submit.prevent="makePurchase">
    <label for="adultTickets">Adult Tickets: </label>
    <b-form-spinbutton id="adultTickets" v-model="purchase.adultTickets" inline placeholder="--"></b-form-spinbutton><br><br>
    <label for="kidsTickets">Kids Tickets: </label>
    <b-form-spinbutton id="kidsTickets" v-model="purchase.kidsTickets" inline placeholder="--"></b-form-spinbutton><br><br>
    <label for="visitDate" style="display:block">Visit Date: </label>
    <b-form-datepicker id="visitDate" placeholder="Choose a date" locale="en" v-model="purchase.visitDate"></b-form-datepicker>
    <label for="total">Grand Total: </label>
    <label>$<span style="text-decoration:underline">{{(purchase.adultTickets*45)+(purchase.kidsTickets*12)}}</span></label>
<br>
    <b-button variant="primary" type="submit">Purchase</b-button> 
</b-form>
</b-container>
</div>
</template>

<script>
import visitorServices from '../visitorServices'
export default {
    name: 'Tickets',
        data(){
            return{
               purchase:{
                   email: null,
                   adultTickets: null,
                   kidsTickets: null,
                   totalPrice: null,
                   visitDate: null,
                   purchaseDate: null,
                   status: null
               }

            }
        },

        methods: {
            makePurchase(){
                this.purchase.email = this.$store.getters.getAccountInfo
                const currentDateWithFormat = new Date()
                this.purchase.purchaseDate = currentDateWithFormat
                const adultTotal = Number(this.purchase.adultTickets)*45
                const kidsTotal = Number(this.purchase.kidsTickets)*12
                this.purchase.totalPrice = adultTotal+kidsTotal
                this.purchase.status = "Purchased"
                try{
                   visitorServices.purchase(this.purchase)
                    this.$router.push({name: 'Purchases'}) 
                }catch(error){
                    console.log(error)
                }
            },



        },

        



    }
</script>

<style scoped>
.back{
  background-color: white;
  margin-top: 12%
}
</style>