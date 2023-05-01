/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let profit = 0
 
    let purchasePrice = prices[0]
 
    for (let i = 0; i < prices.length; i++){
        if (purchasePrice > prices[i]) {
            purchasePrice = prices[i]
        }
 
        profit = Math.max(profit, prices[i]-purchasePrice)
    }
    return profit;
 
 };