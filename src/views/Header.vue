<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand"> Stock Trade </router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" active-class="active" tag="li"><a>Stock</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" v-on:click="endDay">End Day</a></li>
                    <li 
                        class="dropdown"
                        :class="{open: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen"
                    >
                        <a  href="#" 
                            class="dropdown-toggle" 
                            data-toggle="dropdown" 
                            role="button" 
                            aria-haspopup="true" 
                            aria-expanded="false">Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        funds() {
            return this.$store.getters.getFunds;
        }
    },
    methods: {
        ...mapGetters([
            'getFunds', 
            'getStockPortfolio', 
            'getStocks'
        ]),
        ...mapActions([
            'randomizeStocks',
            'fetchData'
        ]),
        endDay() {
            return this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.getFunds(),
                stockPortfolio: this.getStockPortfolio(),
                stockItems: this.getStocks()
            };
            // console.log(data);
            console.log('Storing data to Firebase...');
            this.$http.put('stockTradeData.json', data);
        },
        loadData() {
            this.fetchData();
        }
    }
}
</script>