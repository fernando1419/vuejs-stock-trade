<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import Header from './views/Header.vue';

export default {
    components: {
        appHeader: Header
    },
    created() {
        this.$store.dispatch('initializeStocks');
        this.$store.dispatch('callBayStocks', {stockId: 2, quantity: 50, stockPrice: 500});
    }
}
</script>

<style>
    body {
        padding: 30px;
    }
</style>