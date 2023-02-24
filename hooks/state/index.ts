import { atom, useAtom } from "jotai";
import { projects } from "./constants";

const walletAddressAtom = atom("");
const mainDataAtom = atom(projects);

export const useWalletAddress = () => {
  return useAtom(walletAddressAtom);
};

export const useMainData = () => {
  return useAtom(mainDataAtom);
};
