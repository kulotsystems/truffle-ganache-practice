const Kulot = artifacts.require("Kulot");

module.exports = function (deployer) {
    deployer.deploy(Kulot, 29);
};
