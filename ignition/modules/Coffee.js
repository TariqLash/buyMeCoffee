const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Coffee", (m) => {
  const coffee = m.contract("Coffee");
  return { coffee };
});