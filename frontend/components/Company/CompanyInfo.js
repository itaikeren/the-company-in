import React from "react";
import ExtraInfo from "./ExtraInfo";

const CompanyInfo = ({ info }) => {
  return (
    <div className="flex flex-col w-2/3 items-center space-y-3">
      <div className="text-green-600 font-medium text-lg uppercase">{info.domain}</div>
      <div className="flex flex-row space-x-4 items-center">
        <img className="h-16 w-16 rounded-full" src={info.logo} alt="" />
        <div className="text-gray-900 text-7xl font-bold">{info.legalName}</div>
      </div>
      <div className="text-gray-500 text-lg">{info.description}</div>
      <div className="w-screen">
        <ExtraInfo company={info} />
      </div>
    </div>
  );
};

export default CompanyInfo;
