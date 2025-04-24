import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;
const contractAddress = "0x5F5a5EE762C6E9837D24cf1557f92Daebf12C03F";

const MintTokenModule = buildModule("MintToken", (m) => {
  const tokenAddress = m.getParameter("tokenAddress", contractAddress);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const MintToken = m.contract("PxkToken", [tokenAddress]);

  return { MintToken };
});

export default MintTokenModule;
