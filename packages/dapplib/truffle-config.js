require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain mixture grace glove flip tuition'; 
let testAccounts = [
"0xd0c3e63746991394b04767d14dc6ddd6099adc7d7d2b2cdd7191099f1580d248",
"0x695e05c1c6b04c4e71ad831aedce13b9c8580bd25e224563c18faf4b7e9ad90c",
"0x5a537a9102547e8accb6f85c1913ccdd994ad036460db6ece7698a611096f732",
"0x5a121d657f00bed160ef1b22ff40930196181c1af8ed8e53551927a8b6a5f81a",
"0xfdb824f1a5ae732830cff032a678a7745c8e09c0eeea46551a829f44acf5a64e",
"0x5b2cf0fe1262e221837e616b0fbe734eec8d57b5abae2f121525abcf1707054b",
"0x0cd256839dafe015cc78769881ad99104597f9a80c3089b98223b0db2c58d56b",
"0xe8ee5acff9100d523bd627b9a0b087fe93c93732a1738a4ac26f8e7b5cf1f19d",
"0x7aa449acd82218f31cf150451f809f594475d2b4fcdd57ceaf22339aa4d29bef",
"0x09c2bf0a6f6a96ba6e48e54505d472a92c14d0cf744400f3582d0f07fa3e3ffb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

