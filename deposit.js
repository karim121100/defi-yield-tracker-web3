const users = {};

function addDeposit(address, amount) {
  if (!users[address]) {
    users[address] = 0;
  }
  users[address] += amount;
}

function getDeposit(address) {
  return users[address] || 0;
}

module.exports = {
  addDeposit,
  getDeposit
};
