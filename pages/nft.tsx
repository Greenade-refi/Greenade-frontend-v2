import React from "react";
import Button from "../components/common/Button";

import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import Title from "../components/common/Title";
import { useMainData } from "../hooks/state";
import CardSection from "../components/CardSection";
import { CloudSvg } from "../components/common/CloudSvg";
import { useBurnAmount, useBurnData } from "../hooks/state/useAppState";
import Image from "next/image";

const NFT = () => {
  const [mainData] = useMainData();
  const [burnAmount] = useBurnAmount();

  return (
    <div className="flex flex-col items-start w-full h-full gap-8">
      <div className="flex justify-between w-full max-w-6xl">
        <Title>Your Soulbound NFTs</Title>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-10 mt-20">
        <NFTcard amount={burnAmount.toString()} />
        <div className="text-2xl font-semibold text-brand-600">
          Here is your REC
        </div>
        <div className="text-sm font-semibold cursor-pointer text-grey-400 hover:text-grey-600 hover:underline">
          view it in your wallet
        </div>
      </div>
    </div>
  );
};

export default NFT;

const NFTcard = ({ amount }: { amount: string }) => {
  const [burnData] = useBurnData();
  return (
    <div className="p-2 font-semibold text-center bg-white border rounded-lg shadow-md text-brand-800 font-raleway border-grey-200">
      {/* <span className="text-2xl">{amount}</span> GRN token burned */}
      <div className="border rounded bg-brand-50 w-52">
        <Image
          src={"/images/greenade.png"}
          alt="Sphere"
          width="1125"
          height="881"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="font-bold">{burnData?.name.substring(0, 10)}</div>
          <div className="">#3</div>
        </div>
        <div className="flex gap-6 font-poppins">
          <div className="text-left">
            <div className="text-xs text-grey-400">Value</div>
            <div className="text-sm">{Number(amount) / 100} MWh</div>
          </div>
          <div className="text-left">
            <div className="text-xs text-grey-400">Date</div>
            <div className="text-sm">{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
