import React, { useState } from "react";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { readContract, prepareWriteContract, writeContract } from "@wagmi/core";

import Title from "../../components/common/Title";
import Select from "../../components/common/Select";
import { useMainData } from "../../hooks/state";
import { toast } from "react-hot-toast";
import { ABI, ADDRESS_CONTRACT } from "../../hooks/state/constants";

const initialValue = {
  name: "",
  technologyType: "",
  description: "",
  commisioningDate: "",
  offtaker: "",
  coverImageUrl: "",
  totalValue: "",
  location: "",
  sold: "",
};

const CreateProject = () => {
  const { address: walletAddress } = useAccount();
  const router = useRouter();
  const [mainData, setMainData] = useMainData();

  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const createProjectSmartContract = async () => {
    const addressContract = ADDRESS_CONTRACT;
    // const randomId = RANDOMSTRING;

    const contract = await prepareWriteContract({
      abi: ABI,
      address: addressContract,
      functionName: "createProject",
    });

    const res = await writeContract(contract);
    await res.wait();
  };

  const createProject = async () => {
    try {
      setLoading(true);
      // const newMainData = [...mainData, { id: mainData.length + 1, ...data }];
      // setMainData(newMainData);
      // await createProjectSmartContract();
      // toast.success("Project created successfully");
      setTimeout(() => {
        console.log("address", walletAddress);
        toast.error("Error connecting Hyperspace Testnet");
        setLoading(false);
      }, 1000);
      // setLoading(false);
      // router.push("/producer");
    } catch (e) {
      console.log("CREATE PROJECT: ", e);
      toast.error("Error connecting Hyperspace Testnet");
      setLoading(false);
    }
  };

  const handleChange = (value: string, name: string) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-start gap-8">
      <Title goBack>Create a project</Title>
      <div className="flex flex-col w-full max-w-4xl gap-8">
        <div className="flex items-center w-full gap-8">
          <div className="w-full">
            <Input
              label="Name"
              fullWidth
              value={data.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              placeholder="Enter name of your project"
            />
          </div>
          <div className="w-full">
            <Input
              label="Total Value"
              fullWidth
              type="number"
              value={data?.totalValue}
              onChange={(e) => handleChange(e.target.value, "totalValue")}
              placeholder="Enter total value in MWh"
            />
          </div>
        </div>
        <div className="w-full">
          <Select
            label="Technology Type"
            fullWidth
            value={data.technologyType}
            onChange={(e) => handleChange(e.target.value, "technologyType")}
            placeholder="Type of the technology">
            <option value="">Select</option>
            <option value="Solar">Solar</option>
            <option value="Geothermal">Geothermal</option>
            <option value="Solar Thermal">Solar Thermal</option>
            <option value="Wind">Wind</option>
            <option value="Hydro">Hydro</option>
            <option value="Tidal">Tidal</option>
          </Select>
        </div>
        <div className="">
          <TextArea
            fullWidth
            label="Description"
            value={data.description}
            onChange={(e) => handleChange(e.target.value, "description")}
            placeholder="Tell us something about your project..."
          />
        </div>
        <div className="flex items-center w-full gap-8">
          <div className="w-full">
            <Input
              label="Commisioning date"
              fullWidth
              value={data.commisioningDate}
              type="date"
              onChange={(e) => handleChange(e.target.value, "commisioningDate")}
              placeholder="Enter commisioning date"
            />
          </div>
          <div className="w-full">
            <Input
              label="Offtaker"
              fullWidth
              value={data.offtaker}
              onChange={(e) => handleChange(e.target.value, "offtaker")}
              placeholder="Enter offtaker"
            />
          </div>
        </div>
        <div className="flex items-center w-full gap-8">
          <div className="w-full">
            <Input
              label="Cover Image Url"
              fullWidth
              value={data?.coverImageUrl}
              onChange={(e) => handleChange(e.target.value, "coverImageUrl")}
              placeholder="Url of your cover image"
            />
          </div>
          <div className="w-full">
            <Input
              label="Location"
              fullWidth
              value={data.location}
              onChange={(e) => handleChange(e.target.value, "location")}
              placeholder="Enter your location"
            />
          </div>
        </div>
        <div className="flex justify-end ">
          <Button onClick={createProject} disabled={false}>
            {loading ? (
              <div className="flex items-center gap-2">
                Creating{" "}
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
              <div className="flex items-center gap-2">
                <p>Proceed</p>
                <svg
                  width="57"
                  height="10"
                  viewBox="0 0 57 10"
                  fill="none"
                  className="transition-all transform group-hover:translate-x-2"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M52.25 1.25L56 5M56 5L52.25 8.75M56 5H1"
                    stroke="#007745"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
