/* eslint-disable import/first */
export const allNetworks = [
  // {
  //   name: 'HECO',
  //   asset: 'HECO',
  //   id: 128,
  //   hash: '/heco',
  // },

  // {
  //   name: 'POLYGON',
  //   asset: 'POLYGON',
  //   id: 137,
  //   hash: '/polygon',
  // },
  {
    name: 'FANTOM',
    asset: 'FANTOM',
    id: 250,
    hash: '/fantom',
  },
  {
    name: 'AVALANCHE',
    asset: 'AVALANCHE',
    id: 43114,
    hash: '/avax',
  },
  {
    name: 'BSC',
    asset: 'BSC',
    id: 56,
    hash: '/bsc',
  },
  {
    name: 'AURORA',
    asset: 'AURORA',
    id: 1313161554,
    hash: '/aurora',
  },
  {
    name: 'CRONOS',
    asset: 'CRONOS',
    id: 25,
    hash: '/cronos',
  },
  // {
  //   name: 'CELO',
  //   asset: 'CELO',
  //   id: 42220,
  //   hash: '/celo',
  // },
  // {
  //   name: 'MOONRIVER',
  //   asset: 'MOONRIVER',
  //   id: 1285,
  //   hash: '/moonriver',
  // },
  // {
  //   name: 'Ropsten',
  //   asset: 'ETH',
  //   id: 3,
  //   hash: '/ropsten',
  // },
];

const network = allNetworks.find(n => window.location.hash.startsWith('#' + n.hash));

if (!network) {
  window.location.hash = allNetworks[0].hash;
  window.location.reload();
} else {
  window.REACT_APP_NETWORK_ID = network.id;
}

export default network;
