require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rate magnet assist install clinic bone trial'; 
let testAccounts = [
"0xe890ae772162c01fd412bde502b6db30f265f766656237b5c4287f0984f90b90",
"0x0a97126f1489b3059256f533bd72148a709be18d623b7570f963a8c43599f2c9",
"0x62c39fd2e5d1f8351afb5b3dd4276a164fd16ba883ad1f271940d10528905dd7",
"0xacfd41e22ade83b97d0926ea9cb3919bc57f18495a95ea015588590b437f8b03",
"0x7ed51d57f654a0eab9abc0a14c542c30d691bfabf522be74671cf85012476bb9",
"0xd53faa5b31d1a06e78b990915f2a7b6ba683d232c61ad31396db388c81eae721",
"0x0a19ab653c37adfc2bc3faca27875d5acd780f0898af9ac0cee1453619d9a478",
"0x73606c4f56a4d3a8bfad8c7ebd058bfc73fc0713aeae22c488313f9c0c5a414b",
"0x260ff4db3bb8f21d0dbb782f8b9e1d0e708e3d3dd61c08d57621ab5b068f4386",
"0xf298ad55c0f07292cc8ab3b7c5b1d025b6abe7036ae26793c0871a2c1e8d0f75"
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

