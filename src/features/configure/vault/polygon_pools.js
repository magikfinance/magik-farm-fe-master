export const polygonPools = [
  {
    id: 'spaceshipx-space-usdc', //make sure this matches the api lpPools.json file
    name: 'SPACE-USDC LP', //name of Deposit token
    token: 'SPACE-USDC LP', //same as Deposit Token
    tokenDescription: 'SpaceShipX - SPACE-USDC LP AC Auto Fee Share Vault ', //uses descriptor,
    tokenAddress: '0xA88D2594548d65a1D6C5e9E443bb7640E29CbF19', //the actual lp token you're depositing
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'MagikFarm - SPACE - USDC LP', //this has to match the magikfarm receipt vault token
    earnedTokenAddress: '0xC0983EFbE0243E7450FeFeeeB488033d55C6C5C4',
    earnContractAddress: '0xC0983EFbE0243E7450FeFeeeB488033d55C6C5C4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spaceshipx-space-usdc',
    oraclePrice: 0,
    depositsPaused: true,
    partnership: true,
    isMooStaked: true,
    status: 'active',
    platform: 'SpaceShipX',
    assets: ['SPACE', 'USDC'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', '5AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://polymm.finance/add/0xEc6c6F7E666D8a3FA0FD612B97d6A6D9E7d1E3f3/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    buyTokenUrl:
      'https://polymm.finance/swap?outputCurrency=0xEc6c6F7E666D8a3FA0FD612B97d6A6D9E7d1E3f3&inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  },
  {
    id: 'spaceshipx-xshare-xship', //make sure this matches the api lpPools.json file
    name: 'XSHARE-XSHIP LP', //name of Deposit token
    token: 'XSHARE-XSHIP LP', //same as Deposit Token
    tokenDescription: 'SpaceShipX - XSHARE-XSHIP LP AC Auto Fee Share Vault ', //uses descriptor,
    tokenAddress: '0x136477627AAe8ac733a4393e74Afa3108D8c5c0C', //the actual lp token you're depositing
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'MagikFarm - XSHARE - XSHIP LP', //this has to match the magikfarm receipt vault token
    earnedTokenAddress: '0x31F34DBC2CADB92CB05d5eD67A2248539a01bb11',
    earnContractAddress: '0x31F34DBC2CADB92CB05d5eD67A2248539a01bb11',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spaceshipx-xshare-xship',
    oraclePrice: 0,
    depositsPaused: true,
    partnership: true,
    isMooStaked: true,
    status: 'active',
    platform: 'SpaceShipX',
    assets: ['XSHARE', 'XSHIP'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', '5AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://polymm.finance/add/0x9f64D1aAcb129B844500119B50938c57aa9aD6E5/0xcB3FE445E9c118E2232203b1d4a44f900cBD95b2',
    buyTokenUrl:
      'https://polymm.finance/swap?outputCurrency=0xcB3FE445E9c118E2232203b1d4a44f900cBD95b2&inputCurrency=0x9f64D1aAcb129B844500119B50938c57aa9aD6E5',
  },
];
