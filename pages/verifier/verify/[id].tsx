import { useRouter } from "next/router";
import React from "react";
import DetailPage from "../../../components/DetailPage";
import { useMainData } from "../../../hooks/state";

const ProjectDetails = () => {
  const { query: params } = useRouter();
  const [data] = useMainData();
  const id = Number(params.id as string);

  return <DetailPage data={data[id - 1]} type={"verifier"} />;
};

export default ProjectDetails;
