import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ProjectType } from "../hooks/state/constants";

type CardProps = {
  data: ProjectType;
};

const Card: FC<CardProps> = ({ data }) => {
  const router = useRouter();

  const pathname = router.pathname;
  let path: string;

  const isVerifier = pathname.includes("verifier");
  const isProducer = pathname.includes("producer");

  if (isVerifier) {
    path = `/verifier/verify/${data.id}`;
  } else if (isProducer) {
    path = `/producer/project/${data.id}`;
  } else {
    path = `/project/${data.id}`;
  }

  const imagePath = data?.coverImageUrl;

  return (
    <div
      onClick={() => router.push(path)}
      className="flex flex-col gap-2 p-4 overflow-hidden transition-all bg-transparent bg-white border rounded-lg cursor-pointer w-96">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-brand-800">
          {data.technologyType} | {data.location}
        </div>
        {data.verified ? (
          <div className="flex items-center gap-1 font-semibold text-brand-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            <p className="text-xs">Verified</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="relative overflow-hidden rounded-md h-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imagePath}
          alt=""
          style={{
            // width: "1000px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="text-sm text-brand-800"> {data.name} </div>
      <div className="flex flex-row items-end flex-1 gap-4 py-2 rounded-md bg-brand-50">
        <div className="flex flex-col items-start flex-1 text-sm text-center text-grey-400 clamp2">
          <div>Available</div>
          <span className="text-lg font-semibold text-brand-700">
            {data?.totalValue}
          </span>{" "}
          MWh
        </div>
        <div className="flex flex-col items-start flex-1 text-sm text-center text-grey-400 clamp2">
          <div>Sold</div>
          <span className="text-lg font-semibold text-brand-700">
            {data?.sold === "" ? "0" : data?.sold}
          </span>{" "}
          MWh
        </div>
      </div>
    </div>
  );
};

export default Card;
