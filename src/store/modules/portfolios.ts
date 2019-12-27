const state = {
    funds: 100000,
    stocks: []
};

const getters = {
    getStockPortfolio(state: any, getters: any) {
        return state.stocks.map((stock: any) => {
            const record = getters.stocks.find((element: any) => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    getFunds (state: any) {
        return state.funds;
    } 
}

const mutations = {
    BUY_STOCK: function(state: any, {stockId, quantity, stockPrice}: any) { // recieves the order as parameter
        const record = state.stocks.find(function(element: any) {
            return element.id = stockId;
        });
        if (record) { // stock found in array
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    SELL_STOCK(state: any, {stockId, quantity, stockPrice}: any) {
        const record = state.stocks.find( (element: any) => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexof(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    callSellStock({commit}: any, order: object) {
        commit('SELL_STOCK', order);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}