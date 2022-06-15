import { JsonRpcProvider } from '@ethersproject/providers';

export const getEthJsonRpcProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_ETH_RPC_URL as string
);
export const getJsonRpcProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_RPC_URL as string
);
console.log('process.env.POLYGON_MUMBAI_RPC_ENDPOINT', process.env.POLYGON_MUMBAI_RPC_ENDPOINT)
export const getMumbaiJsonRpcProvider = new JsonRpcProvider(
  process.env.POLYGON_MUMBAI_RPC_ENDPOINT as string,
  80001
);
