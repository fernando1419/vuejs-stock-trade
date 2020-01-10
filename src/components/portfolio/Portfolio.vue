<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="index" :stockData="stock"></app-stock>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
            stocks: 'getStockPortfolio'
        })        
    },
    components: {
        appStock: Stock
    }
}
</script>