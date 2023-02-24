import React from "react";
import Button from "../components/common/Button";

import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import Title from "../components/common/Title";
import { useMainData } from "../hooks/state";
import CardSection from "../components/CardSection";
import { CloudSvg } from "../components/common/CloudSvg";

const Producer = () => {
  const { address: walletAddress } = useAccount();
  const router = useRouter();

  const [mainData] = useMainData();
  const verifiedProjects = mainData.filter((data) => data.verified);

  return (
    <div className="flex flex-col items-start w-full h-full gap-8">
      <div className="flex justify-between w-full max-w-6xl">
        <Title>Your marketplace</Title>
        {/* <Button
          onClick={() => router.push("/producer/create")}
          className="flex items-center gap-2">
          Create New
          <svg
            width="57"
            height="10"
            viewBox="0 0 57 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M52.25 1.25L56 5M56 5L52.25 8.75M56 5H1"
              stroke="#007745"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button> */}
      </div>
      {verifiedProjects && verifiedProjects.length > 0 ? (
        <CardSection cards={verifiedProjects} />
      ) : (
        <div className="flex flex-col items-center justify-start w-full h-full gap-8 mt-10">
          <CloudSvg />
          <Title>No Active Projects</Title>
        </div>
      )}
    </div>
  );
};

export default Producer;
