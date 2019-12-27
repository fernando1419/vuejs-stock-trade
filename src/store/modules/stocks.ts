import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const getters = {
    getStocks: (state: any) => {
        return state.stocks;
    }
};

const mutations = {
    SET_STOCKS: function(state: any, stocks: number) {
        state.stocks = stocks;
    },
    RANDOM_STOCKS: (state: any) => {

    }
};

const actions = {
    buyStock: function(context: any, order: object){
        context.commit();
    },
    initializeStocks: function(context: any) {
        context.commit('SET_STOCKS', stocks); // json data from ../../data/stocks
    },
    randomizeStocks: ({commit}: any) => {
        commit('RANDOM_STOCKS')
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};