<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stockData.name }}
                    <small>(Price: {{ stockData.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left" :class="insufficientFunds ? 'col-xs-6' : null ">
                    <input  type="number" 
                            class="form-control" 
                            placeholder="Quantity" 
                            v-model="quantity"
                            :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success" 
                        v-on:click="buyStock" 
                        :disabled="insufficientFunds || quantity <= 0 || isNaN(quantity)"
                    > {{ insufficientFunds ? 'Insufficient Funds!' : 'Buy' }} 
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
export default {
    props: ['stockData'],
    data: function() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.getFunds;
        },
        insufficientFunds() {
            return this.quantity * this.stockData.price > this.funds;
        }
    },
    methods: {
        buyStock: function() {
            const order = {
                stockId: this.stockData.id,
                stockPrice: this.stockData.price,
                quantity: parseInt(this.quantity), // not from stockData array, this is the v-model property, casting to Int.
            };
            console.log('Buying... ', order)
            this.$store.dispatch('callPortfolioBuyStock', order);
            this.quantity = 0;
        }
    }
}
</script> 

