import stocks from '../../data/stocks.js';

const state = {
    stocks: []
};

const getters = {
    getStocks: state => {
        return state.stocks;
    }
};

const mutations = {
    SET_STOCKS: function(state, stocks) {
        state.stocks = stocks;
    },
    RANDOM_STOCKS: (state) => {

    }
};

const actions = {
    buyStock: function(context, order){
        context.commit();
    },
    initializeStocks: function(context) {
        context.commit('SET_STOCKS', stocks); // json data from ../../data/stocks
    },
    randomizeStocks: ({commit}) => {
        commit('RANDOM_STOCKS')
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};