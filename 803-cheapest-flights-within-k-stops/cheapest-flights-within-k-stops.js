/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {

    let prices = Array(n).fill(Number.POSITIVE_INFINITY);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        let tempPrices = [...prices];

        for (let [s, d, p] of flights) {
            if (prices[s] == Number.POSITIVE_INFINITY)
                continue;
            if (prices[s] + p < tempPrices[d]) {
                tempPrices[d] = prices[s] + p;
            }
        }
        prices = [...tempPrices]
    }

    if (prices[dst] == Number.POSITIVE_INFINITY) return -1;
    return prices[dst];
};