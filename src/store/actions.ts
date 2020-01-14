import Vue from 'vue';

export const fetchData = function({commit}: any) { // action
    (<any>Vue).http.get('stockTradeData.json')
            .then(function(response: any) { return response.json(); })
            .then((data: any) => {
                if (data) {
                    const stocks = data.stockItems;
                    const funds = data.funds;
                    const stockPortfolio = data.stockPortfolio;
                
                    const portfolio = {
                        stockPortfolio,
                        funds
                    }
                    
                    commit('SET_STOCKS', stocks);
                    commit('SET_PORTFOLIO', portfolio);

                    console.log('Fetching data from Firebase...');
                }
            });
}   