<template>
    <div>
        <app-stock v-for="(stock, index) in getStocks" :key="index" :stockData="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        appStock: Stock
    },
    computed: {
        ...mapGetters(['getStocks'])
    }
}
</script>

<style>

</style>