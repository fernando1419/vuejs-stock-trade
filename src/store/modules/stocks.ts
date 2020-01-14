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
    SET_STOCKS: function(state: any, stocks: any) {
        state.stocks = stocks;
    },
    RANDOM_STOCKS: (state: any) => {
        state.stocks.forEach((element: any) => {
            element.price = Math.round(element.price * (1 + Math.random() - 0.5)); // between 0.5 and 1.5
        });
    }
};

const actions = {
    callPortfolioBuyStock: function(context: any, order: object){
        context.commit('BUY_STOCK', order); // calls the mutation BUY_STOCK from portfolio module.
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