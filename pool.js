const pool = {
  totalLiquidity: 0
};

function addLiquidity(amount) {
  pool.totalLiquidity += amount;
}

function getLiquidity() {
  return pool.totalLiquidity;
}

module.exports = {
  addLiquidity,
  getLiquidity
};
