const MyAdvancedToken = artifacts.require("MyAdvancedToken");

module.exports = function(deployer) {
  deployer.deploy(MyAdvancedToken, "1000000000000000000000000000", "pekka", "PKA");
};
