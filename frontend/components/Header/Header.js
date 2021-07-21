import React, { useState } from "react";

import Nav from "./Nav";

const Header = ({ title }) => {
  const [pageTitle, setPageTitle] = useState("");

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row items-center p-4 space-x-4 bg-gray-800">
        <div className="text-3xl font-bold w-10 h-10 rounded-full bg-green-600"></div>
        <div className="w-full flex flex-row items-center justify-between">
          <Nav setPageTitle={setPageTitle} />
        </div>
      </div>
      <div className="h-16 bg-white shadow mb-5 p-2.5 px-5">
        <span className="text-4xl font-bold">{title || pageTitle}</span>
      </div>
    </div>
  );
};

export default Header;
