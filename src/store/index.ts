import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks';
import portfolios from './modules/portfolios';

import * as actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    actions: actions,
    modules: {
        stocks,
        portfolios
    }
})
