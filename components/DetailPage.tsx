/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Button from "./common/Button";
import { useRouter } from "next/router";
import { ABI, ADDRESS_CONTRACT, ProjectType } from "../hooks/state/constants";
import Input from "./common/Input";
import { BigNumber, ethers } from "ethers";
import { toast } from "react-hot-toast";
import { useMainData } from "../hooks/state";
import { useAccount } from "wagmi";
import { useBurnAmount, useBurnData } from "../hooks/state/useAppState";
import Image from "next/image";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { prepareWriteContract, writeContract } from "@wagmi/core";

function DetailPage({
  data,
  type,
}: {
  data: ProjectType;
  type: "verifier" | "producer" | "user";
}) {
  const router = useRouter();
  const [mainData, setMainData] = useMainData();
  const { address: walletAddress } = useAccount();
  const [, setBurnAmount] = useBurnAmount();
  const { openConnectModal } = useConnectModal();
  const [, setBurnData] = useBurnData();
  const [amount, setAmount] = useState("");
  const [grnAmount, setGrnAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const verifyProjectSmartContract = async () => {
    const addressContract = ADDRESS_CONTRACT;
    const contract = await prepareWriteContract({
      abi: ABI,
      address: addressContract,
      functionName: "verifyProject",
    });

    const res = await writeContract(contract);
    await res.wait();
  };

  const verifyProject = async (_data: ProjectType) => {
    try {
      setLoading(true);
      // const newMainData =
      //   mainData.map((data) => {
      //     if (data?.id === _data.id) return { ...data, verified: true };
      //     else return data;
      //   }) ?? [];

      // setMainData(newMainData);
      // await verifyProjectSmartContract();
      // toast.success("Project Verified");
      setTimeout(() => {
        toast.error("Error connecting Hyperspace Testnet");
        setLoading(false);
      }, 1000);
      // setLoading(false);
      // router.push("/verifier");
    } catch (e) {
      setLoading(false);
    }
  };

  const buySmartContract = async () => {
    const addressContract = ADDRESS_CONTRACT;
    const contract = await prepareWriteContract({
      abi: ABI,
      address: addressContract,
      functionName: "buyTokens",
      args: [
        walletAddress!,
        BigNumber.from((Number(amount) * (10 ^ 18)).toString()),
      ],
    });

    const res = await writeContract(contract);
    await res.wait();
  };

  const buy = async (data: ProjectType) => {
    if (Number(amount) > Number(data?.totalValue)) {
      toast("amount must be less than available MWh value");
      return;
    }

    if (Number(amount) === 0) {
      toast("amount must be greater than 0 MWh");
      return;
    }
    try {
      setLoading(true);
      // setBurnAmount(Number(amount));
      // setBurnData(data);
      // await buySmartContract();
      setTimeout(() => {
        toast.error("Error connecting Hyperspace Testnet");
        setLoading(false);
      }, 1000);
      // setLoading(false);
      // router.push("/burn");
    } catch (e) {
      console.log("BUY ERROR: ", e);
      toast.error("Error connecting Hyperspace Testnet");
      setLoading(false);
    }
  };

  useEffect(() => {
    setGrnAmount(Number(amount === "" ? 0 : amount));
  }, [amount]);

  return (
    <div className="flex flex-col items-stretch w-full h-full gap-4">
      <div className="flex justify-between w-full">
        <Button
          className="flex items-center gap-2"
          onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 transition-all transform group-hover:-translate-x-2"
            strokeWidth={1.5}
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </Button>
        {type === "verifier" && (
          <Button
            className="flex items-center gap-2"
            onClick={() => verifyProject(data)}>
            {loading ? (
              <div className="flex items-center justify-center gap-2 ">
                Verifying...{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 animate-spin">
                  <path
                    fillRule="evenodd"
                    d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              "Verify (0/1)"
            )}
          </Button>
        )}
      </div>
      <div className="relative flex items-start w-full gap-4">
        <div className="flex flex-col flex-1 max-w-4xl gap-8">
          <h1 className="text-3xl font-bold text-brand-700">{data?.name}</h1>
          <p className="text-2xl font-semibold text-orange-700">
            {data?.technologyType}
          </p>
          {type === "user" && (
            <div className="max-w-sm p-2 overflow-hidden border-4 border-brand-700 rounded-xl">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={data?.coverImageUrl}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )}
          {!(type === "user") && (
            <div className="">
              <div className="text-lg font-semibold text-brand-900">
                Description
              </div>
              <div className="text-brand-900">{data?.description}</div>
            </div>
          )}
          <div className="flex gap-4">
            <div className="">
              <div className="text-lg font-semibold text-brand-900">
                Location
              </div>
              <div className="text-brand-900">{data?.location}</div>
            </div>
            <div className="">
              <div className="text-lg font-semibold text-brand-900">
                Commisioning date
              </div>
              <div className="text-brand-900">{data?.commisioningDate}</div>
            </div>
            <div className="">
              <div className="text-lg font-semibold text-brand-900">
                Offtaker
              </div>
              <div className="text-brand-900">{data?.offtaker}</div>
            </div>
          </div>
          <div className="">
            <div className="text-lg font-semibold text-brand-900">
              Total Value
            </div>
            <div className="text-brand-900">
              <span className="font-semibold">{data?.totalValue}</span> MWh
            </div>
          </div>
        </div>
        {!(type === "user") && (
          <div className="max-w-lg p-2 overflow-hidden border-4 border-brand-700 rounded-xl">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                src={data?.coverImageUrl}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
        {type === "user" && (
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-4 p-4 border shadow-lg rounded-xl">
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
              <div className="pt-2 text-sm font-semibold text-brand-700">
                1 MWh = 1 GRN = 0.01tFIL
              </div>

              <div className="flex items-center justify-between py-2">
                <Input
                  label="Amount (MWh)"
                  fullWidth
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  placeholder="1 MWh"
                  className="min-w-0"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <Input
                  label="GRN you will recieve"
                  fullWidth
                  value={grnAmount}
                  disabled
                  placeholder="1 MWh"
                  className="min-w-0"
                />
              </div>
              <div className="flex flex-col gap-2 py-2 text-sm">
                <div className="font-medium text-gray-600 dark:text-gray-300">
                  Currency
                </div>
                <div className="flex items-center gap-2 p-2 text-sm border border-gray-200 rounded-lg md:p-3 dark:text-white dark:bg-gray-500 dark:border-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-brand-600 dark:focus:ring-brand-400 focus:outline-none ">
                  <Image
                    src={"/images/file.png"}
                    width="20"
                    height="20"
                    alt="Filecoin"
                  />
                  <div className="">tFil</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-2 text-sm">
                <div className="flex justify-between">
                  <div className="">Total</div>
                  <div className="">{0.01 * Number(amount)} tFil</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-2 py-2 md:flex-row">
                {walletAddress ? (
                  <Button fullWidth onClick={() => buy(data)}>
                    {loading ? (
                      <div className="flex items-center justify-center gap-1">
                        Buying...{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 animate-spin">
                          <path
                            fillRule="evenodd"
                            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : (
                      "Buy Now"
                    )}
                  </Button>
                ) : (
                  <Button fullWidth onClick={() => openConnectModal?.()}>
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
