import React, { useState, useEffect } from "react";
import clsx from "clsx";
import axios from "axios";
import useDebounce from "../../utils/use-debounce";

function getWebsiteInfo(arr, website) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === website) {
      return arr[i];
    }
  }
  return null;
}

function checkIfAlreadyInList(list, website) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === website.id) {
      return true;
    }
  }
  return false;
}

const Search = ({ list, updateList }) => {
  const [searchValue, setSearchValue] = useState("");
  const [companies, setCompanies] = useState([]);

  const debouncedSearchTerm = useDebounce(searchValue, 300);

  const searchCompanies = async (search) => {
    try {
      let res = await axios.get(`http://localhost:5000/companies/search?domain=${search}`);
      return res.data.company;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCompanies(debouncedSearchTerm).then((result) => {
        if (result) {
          if (!checkIfAlreadyInList(list, result)) {
            setCompanies([result]);
          }
        }
      });
    } else {
      setCompanies([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setCompanies([]);
  }, [searchValue]);

  const handleClick = (website) => {
    let websiteInfo = getWebsiteInfo(companies, website);
    if (websiteInfo) {
      updateList((prev) => [...prev, websiteInfo]);
    }
    setSearchValue("");
    setCompanies([]);
  };

  return (
    <div className="w-full flex justify-center px-5">
      <div className="w-1/3 relative">
        <input
          className="border border-gray-300 rounded-lg w-full p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="example.com"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          className={clsx("absolute bg-white rounded-lg mt-1 w-full shadow-sm border border-gray-300 text-left", {
            hidden: companies.length === 0,
          })}
        >
          {companies.map((el) => (
            <div
              key={el.id}
              className="p-2 hover:bg-gray-100 hover:cursor-pointer rounded-lg"
              onClick={() => handleClick(el.name)}
            >
              {el.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
