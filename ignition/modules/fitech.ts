// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;
const initial_Owner = "0x45630a7Db07604f82a1D2ccf8509eb375b1826C6";

const FitechModule = buildModule("LockModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", initial_Owner);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const Fitech = m.contract("PxkToken", [initialOwner]);

  return { Fitech };
});

export default FitechModule;
