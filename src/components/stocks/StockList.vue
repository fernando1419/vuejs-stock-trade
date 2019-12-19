<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="index"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    data: function() {
        return {
            stocks: [
                {id: 1, name: 'Facebook', price: 500},
                {id: 2, name: 'Google', price: 400},
                {id: 3, name: 'Twitter', price: 300},
                {id: 4, name: 'Whatsupp', price: 350}
            ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>

<style>

</style>