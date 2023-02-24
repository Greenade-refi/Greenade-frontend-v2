import React from "react";

const EmptyTable = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-row text-black bg-white border-b border-grey-200">
      <div className="flex-1 p-4 text-center">{label}</div>
    </div>
  );
};

export default EmptyTable;
