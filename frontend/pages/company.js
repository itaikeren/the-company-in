import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import useCompany from "../utils/use-company";

import Header from "../components/Header/Header";
import CompanyInfo from "../components/Company/CompanyInfo";
import Loader from "../images/Loader";

const company = () => {
  const router = useRouter();
  const { company, isLoading } = useCompany(router.query["domain"]);

  return (
    <div>
      <Head>
        <title>InvestApp</title>
        <meta name="description" content="InvestApp By Itai Keren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen bg-gray-200">
        <div>
          <Header title={"Company details"} />
        </div>
        {isLoading && (
          <div className="w-full flex justify-center animate-spin">
            <div className="">
              <Loader />
            </div>
          </div>
        )}
        {!isLoading && (
          <div className="w-full px-5 flex justify-center">
            <CompanyInfo info={company} />
          </div>
        )}
      </div>
    </div>
  );
};

export default company;
