const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'honey art piano steak make mule myself stay wonder fresh uncle gauge', 'https://goerli.infura.io/v3/ce0c97f2018d41069c86863e95610054'
)


const web3 = new Web3(provider)

const deploy = async () => {
    const acoounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from account', acoounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hello']})
        .send({gas: '1000000', from: acoounts[0]})

    console.log('Contract deployed to',result.options.address)
}

deploy()