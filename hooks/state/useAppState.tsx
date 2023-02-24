import { atom, useAtom } from "jotai";
import { ProjectType } from "./constants";

const selectedDaoAddressAtom = atom("");
const selectedProposalIdAtom = atom(0);
const burnAmountAtom = atom(0);
const burnDataAtom = atom<ProjectType | null>(null);

export const useSelectedDaoAddress = () => {
  return useAtom(selectedDaoAddressAtom);
};

export const useBurnAmount = () => {
  return useAtom(burnAmountAtom);
};

export const useBurnData = () => {
  return useAtom(burnDataAtom);
};

export const useSelectedProposalId = () => {
  return useAtom(selectedProposalIdAtom);
};
