// WARNING: DO NOT DELETE THIS FILE
// This file was auto-generated by the Witnet compiler, any manual changes will be overwritten.
const BlockRelay = artifacts.require("BlockRelay")
const WitnetBridgeInterface = artifacts.require("WitnetBridgeInterface")
const CBOR = artifacts.require("CBOR")
const Witnet = artifacts.require("Witnet")

const addresses = {
  "goerli": {
    "BlockRelay": "0xEe39A60e512146a6EB023e1b0B03B39b5C889202",
    "CBOR": "0x250BB1B8C87F695905f61e4D9dB278bE42a7f622",
    "Witnet": "0xDF1D50cCE82ce961d623323cfC765Dc929F616C8",
    "WitnetBridgeInterface": "0xDD57456a0e118758c1c878fAa7677D950Fc46758",
  },
  "rinkeby": {
    "BlockRelay": "0xEe39A60e512146a6EB023e1b0B03B39b5C889202",
    "CBOR": "0x250BB1B8C87F695905f61e4D9dB278bE42a7f622",
    "Witnet": "0xDF1D50cCE82ce961d623323cfC765Dc929F616C8",
    "WitnetBridgeInterface": "0xDD57456a0e118758c1c878fAa7677D950Fc46758",
  },
}

module.exports = function (deployer, network) {
  if (network in addresses) {
    Witnet.address = addresses[network]["Witnet"]
    WitnetBridgeInterface.address = addresses[network]["WitnetBridgeInterface"]
  } else {
    deployer.deploy(BlockRelay).then(() => {
      return deployer.deploy(WitnetBridgeInterface, BlockRelay.address, 2)
    })
    deployer.deploy(CBOR)
    deployer.link(CBOR, Witnet)
    deployer.deploy(Witnet)
  }
}
