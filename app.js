const { addDeposit } = require("./deposit");
const { calculateYield } = require("./yield");
const { logInfo } = require("./logger");

const userAddress = "0xUserWalletHere";

async function startApp() {
  logInfo("Starting DeFi Yield Tracker");

  addDeposit(userAddress, 100);
  const result = calculateYield(userAddress);

  logInfo("Total Balance with Yield: " + result + " TOKEN");
}

startApp();
