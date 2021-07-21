import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "../components/Header/Header";
import List from "../components/List/List";
import Search from "../components/SearchBar/Search";

export default function Home() {
  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    if (companiesList.length === 0) {
      let arr = window.localStorage.getItem("companies");
      if (arr) {
        setCompaniesList(JSON.parse(arr));
      }
    } else {
      window.localStorage.setItem("companies", JSON.stringify(companiesList));
    }
  }, [companiesList]);

  return (
    <div>
      <Head>
        <title>InvestApp</title>
        <meta name="description" content="InvestApp By Itai Keren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen bg-gray-200">
        <div>
          <Header />
        </div>
        <div className="p-5 w-full flex justify-center">
          <div className="w-2/3 flex-col text-center text-gray-800">
            <div className="font-medium text-lg">Hello welcome to our dashboard young investor!</div>
            <div>To start learning about any company, just type their domain (example.com)</div>
          </div>
        </div>
        <div className="w-full px-5 space-y-5">
          <Search list={companiesList} updateList={setCompaniesList} />
          <List values={companiesList} />
        </div>
      </div>
    </div>
  );
}
