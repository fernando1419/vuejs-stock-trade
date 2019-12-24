<template>
    <div>
        <app-stock v-for="(stock, index) in callGetStocks" :key="index" :stockData="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        callGetStocks() {
            return this.$store.getters.getStocks;
        }
    }
}
</script>

<style>

</style>