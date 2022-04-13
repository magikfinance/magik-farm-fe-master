export const fantomPools = [
  {
    id: 'spirit-ftm-magik',
    name: 'MAGIK-FTM LP',
    token: 'MAGIK-FTM LP',
    tokenDescription: 'Magik Finance',
    tokenAddress: '0xDc71A6160322ad78DaB0abb47C7A581cFE9709Ee',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'spiritMAGIK-FTM',
    earnedTokenAddress: '0xe8cE63e37bB4B662837144058c298C4e7Fd0b93C',
    earnContractAddress: '0xe8cE63e37bB4B662837144058c298C4e7Fd0b93C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spirit-ftm-magik',
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: 'active',
    platform: 'SpiritSwap',
    assets: ['MAGIK', 'FTM'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://swap.spiritswap.finance/#/add/FTM/0x87a5C9B60A3aaf1064006FE64285018e50e0d020',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/FTM/0x87a5c9b60a3aaf1064006fe64285018e50e0d020',
  },
  {
    id: 'spirit-ftm-mshare',
    name: 'MSHARE-FTM LP',
    token: 'MSHARE-FTM LP',
    tokenDescription: 'MSHARE',
    tokenAddress: '0x392C85cECcf9855986b0044a365A5532aeC6Fa31',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'magikfarmMSHARE-FTM',
    earnedTokenAddress: '0x0421D1E6F9728Da90a39c579F4b151198Df43DfB',
    earnContractAddress: '0x0421D1E6F9728Da90a39c579F4b151198Df43DfB',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spirit-ftm-mshare',
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: 'active',
    platform: 'SpiritSwap',
    assets: ['MSHARE', 'FTM'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://swap.spiritswap.finance/#/add/FTM/0xC8Ca9026Ad0882133Ef126824F6852567c571A4E',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/FTM/0xc8ca9026ad0882133ef126824f6852567c571a4e',
  },
  {
    id: 'spirit-mshare-magik',
    name: 'MSHARE-MAGIK LP',
    token: 'MSHARE-MAGIK LP',
    tokenDescription: 'MSHARE-MAGIK',
    tokenAddress: '0x4d6b28441c8B293A603243431E6E31F3C2632ddD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'magikfarmMSHARE-MAGIK',
    earnedTokenAddress: '0xc948Da8Eae9F65D7B6fD03658f1488a619DBB757',
    earnContractAddress: '0xc948Da8Eae9F65D7B6fD03658f1488a619DBB757',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spirit-mshare-magik',
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: 'active',
    platform: 'SpiritSwap',
    assets: ['MSHARE', 'MAGIK'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://swap.spiritswap.finance/#/add/0x87a5C9B60A3aaf1064006FE64285018e50e0d020/0xC8Ca9026Ad0882133Ef126824F6852567c571A4E',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/MAGIK/0xC8Ca9026Ad0882133Ef126824F6852567c571A4E',
  },
  {
    id: 'spirit-magik',
    logo: 'single-assets/MAGIK.png',
    name: 'MAGIK',
    token: 'MAGIK',
    tokenDescription: 'MAGIK Finance',
    tokenAddress: '0x87a5c9b60a3aaf1064006fe64285018e50e0d020',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'magikfarmMAGIK',
    earnedTokenAddress: '0x0365b8Aa14D5Eecea962C28e4531D1bc2a22D612',
    earnContractAddress: '0x0365b8Aa14D5Eecea962C28e4531D1bc2a22D612',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'MAGIK',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SpiritSwap',
    assets: ['MAGIK'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/0x87a5c9b60a3aaf1064006fe64285018e50e0d020',
  },
  {
    id: 'spooky-usdc-rarer',
    name: 'RARER-USDC LP',
    logo: 'single-assets/rare.png',
    token: 'RARER-USDC LP',
    tokenDescription: 'RARER-USDC',
    tokenAddress: '0x1fe1b2c679Dcc7b4520b8F8A2E4716896523bc72',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'magikfarmRARER-USDC',
    earnedTokenAddress: '0x5263a8dB2b242350007B5E3319532186e052A91C',
    earnContractAddress: '0x5263a8dB2b242350007B5E3319532186e052A91C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'spooky-usdc-rarer',
    oraclePrice: 0,
    depositsPaused: false,
    partnership: true,
    isMooStaked: true,
    status: 'active',
    platform: 'SpookySwap',
    assets: ['USDC', 'RARER'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_LOW', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://spookyswap.finance/add/0x1078864a3B0E5843995dE00517d871d0A686380b/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl:
      'https://spookyswap.finance/swap?outputCurrency=0x1078864a3B0E5843995dE00517d871d0A686380b',
  },
  {
    id: 'spooky-rarer',
    logo: 'single-assets/Rarer.png',
    name: 'RARER',
    token: 'RARER',
    tokenDescription: 'RARER Single Stake - 0.5% DEPOSIT FEE',
    tokenAddress: '0x1078864a3B0E5843995dE00517d871d0A686380b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'magikfarmRARER',
    earnedTokenAddress: '0xcfc76902271A319370519715Fa485Afcac24AA28',
    earnContractAddress: '0xcfc76902271A319370519715Fa485Afcac24AA28',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'RARER',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SpookySwap',
    assets: ['RARER'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    buyTokenUrl:
      'https://swap.spiritswap.finance/#/exchange/swap/0x87a5c9b60a3aaf1064006fe64285018e50e0d020',
  },
];
