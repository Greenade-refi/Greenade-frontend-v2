import React, { useState } from "react";
import Button from "../components/common/Button";

import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useBurnAmount } from "../hooks/state/useAppState";
import Image from "next/image";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { ABI, ADDRESS_CONTRACT } from "../hooks/state/constants";
import { BigNumber } from "ethers";
import { toast } from "react-hot-toast";

const Burn = () => {
  const { address: walletAddress } = useAccount();
  const router = useRouter();

  const [burnAmount] = useBurnAmount();
  const [loading, setLoading] = useState(false);

  const burnSmartContract = async () => {
    const addressContract = ADDRESS_CONTRACT;
    const contract = await prepareWriteContract({
      abi: ABI,
      address: addressContract,
      functionName: "burnTokens",
      args: [
        walletAddress!,
        BigNumber.from((Number(burnAmount) * (10 ^ 18)).toString()),
      ],
    });

    const res = await writeContract(contract);
    await res.wait();
  };

  const burn = async () => {
    try {
      setLoading(true);
      // await burnSmartContract();
      setTimeout(() => {
        toast.error("Error connecting Hyperspace Testnet");
        setLoading(false);
      }, 1000);
      // setLoading(false);
      // router.push("/nft");
    } catch (e) {
      console.log("BURN ERROR: ", e);
      toast.error("Error connecting Hyperspace Testnet");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start w-full h-full gap-8">
      <div className="flex justify-between w-full max-w-6xl">
        {/* <Title>Burn GRN Tokens</Title> */}
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 mt-20">
        <div className="text-xl font-semibold text-brand-700">
          You recieved{" "}
          <span className="text-3xl text-brand-800">{burnAmount}</span> GRN
          tokens
        </div>
        <div className="w-64 animate-wiggle-slow">
          <Image
            src={"/images/greenade.png"}
            alt="Sphere"
            width="1125"
            height="881"
          />
        </div>
        <div className="text-xl font-semibold text-center font-raleway text-grey-500">
          In order to receive your REC Soulbound NFT,
          <br /> burn your GRN tokens now.
        </div>
        {/* <p className="text-lg text-grey-800">
          <span className="text-3xl text-brand-800">{burnAmount}</span> GRN
          tokens
        </p> */}
        <Button onClick={() => burn()} className="flex items-center gap-2">
          {loading ? "Burning..." : "Burn"}
          {loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="orange"
              className={`w-6 h-6 }`}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Burn;
