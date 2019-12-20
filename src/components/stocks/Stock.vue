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
                <div class="pull-left">
                    <input type="number" min="0" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success" 
                        v-on:click="buyStock" 
                        :disabled="quantity <= 0 || isNaN(quantity)"
                    > Buy </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stockData'],
    data: function() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock: function() {
            const order = {
                stockId: this.stockData.id,
                stockPrice: this.stockData.price,
                quantity: parseInt(this.quantity), // not from stockData array, this is the v-model property, casting to Int.
            };
            // console.log(order);
            this.quantity = 0;
        }
    }
}
</script> 

