const { getDeposit } = require("./deposit");
const { yearlyRate } = require("./config");

function calculateYield(address) {
  const base = getDeposit(address);
  const profit = base * yearlyRate;
  return base + profit;
}

module.exports = {
  calculateYield
};
