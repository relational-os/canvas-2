import AddressBook from '@exquisiteland/contracts/addresses/137.json';
import AddressBookDev from '@exquisiteland/contracts/addresses/80001-dev.json';
import isProd from '@server/isProd';

export const OPENSEA_URL = isProd
  ? 'https://opensea.io/assets/matic/'
  : 'https://testnets.opensea.io/assets/mumbai/';

export const EXQUISITE_LAND_CONTRACT_ADDRESS = isProd
  ? AddressBook.contract
  : AddressBookDev.contract;

export const LAND_GRANTER_CONTRACT_ADDRESS = isProd
  ? AddressBook.landGranter
  : AddressBookDev.landGranter;

export const FORWARDER_CONTRACT_ADDRESS = isProd
  ? AddressBook.forwarder
  : AddressBookDev.forwarder;


// these are test contracts on mumbai
export const SLIME_CONTRACT_ADDRESS = "0x0D3E6Fa1a479233AeC48ae6bA031c057F949E0e6";
export const SLIME_POOLS_CONTRACT_ADDRESS = "0xa225a6D4ce51f3d1Ba48ad40C968F856159aA55e";

export const GRAPH_URL = isProd
  ? 'https://api.thegraph.com/subgraphs/name/relational-os/exquisite-land'
  : 'https://api.thegraph.com/subgraphs/name/relational-os/exquisite-land-canary';

export const DISCORD_CHANNELS = {
  'terra-masu': '888518144346427392',
  'bot-testing': '910957967849967619',
  'admin-chat': '888520558969487391',
  landless: '917866480283033660'
};

export const DISCORD_WEBHOOKS = {
  gorblin: {
    'admin-chat': process.env.GORBLIN_ADMIN_CHAT,
    'bot-testing': process.env.GORBLIN_BOT_TESTING,
    'terra-masu': process.env.GORBLIN_TERRA_MASU,
    'gorblin-giveaway': process.env.RELATIONAL_GORBLIN_GIVEAWAY,
    landless: process.env.GORBLIN_LANDLESS
  },
  xqst: {
    'admin-chat': process.env.XQST_ADMIN_CHAT,
    'bot-testing': process.env.XQST_BOT_TESTING,
    'terra-masu': process.env.XQST_TERRA_MASU
  }
};

export const ADMIN_ADDRESSES = [
  '0xd286064cc27514b914bab0f2fad2e1a89a91f314',
  '0xf73fe15cfb88ea3c7f301f16ade3c02564aca407',
  '0x1a7be7db3a050624eb17b1a0e747fbaaf2b8a9ca',
  '0x0456fdb63a3cc7ec354435754e5cf30458105416',
  '0x292ff025168d2b51f0ef49f164d281c36761ba2b'
]; // cjpais.eth, shahruz.eth, kpaxle.eth, gorum.eth, jonbo.eth

export const GORBLIN_ADDR = '0x32649b5229Aa947fDea358bCc433Ad636B52F8C0';

export const EMOJI_CODES = {
  ':green_circle:': '%F0%9F%9F%A2'
};
