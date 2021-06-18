require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys:{
	bscscan: process.env.BSC_API_KEY
  },
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://bsc-dataseed.binance.org/'),
      network_id: 56
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
            runs: 999999
        },
        evmVersion: "istanbul"
      }
    },
  },
  db: {
    enabled: false
  }
};

