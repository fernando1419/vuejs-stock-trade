<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stockData.name }}
                    <small>(Price: {{ stockData.price }} - Quantity: {{ stockData.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left" :class="insufficientQuantity ? 'col-xs-6' : null ">
                    <input 
                        type="number" 
                        min="0" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity"
                        :class="{danger: insufficientQuantity}"
                    >
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-info" 
                        v-on:click="sellStock" 
                        :disabled="insufficientQuantity || quantity <= 0 || isNaN(quantity)"
                    > {{ insufficientQuantity ? 'Not enough stock!' : 'Sell' }} 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 2px solid red;
    }
</style>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['stockData'],
    data: function() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stockData.quantity;
        }
    },
    methods: {
        ...mapActions({
            selling: 'callSellStock'
        }),
        sellStock: function() {
            const order = {
                stockId: this.stockData.id,
                stockPrice: this.stockData.price,
                quantity: parseInt(this.quantity)
            }
            console.log('Selling... ', order)
            this.selling(order);
            this.quantity = 0;
        }
    }
}
</script> 
