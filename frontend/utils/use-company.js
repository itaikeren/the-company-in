import useSWR from "swr";
import axios from "axios";

const fetcher = async (...params) => await axios.get(params[0]).then((res) => res.data.company);

export default function useCompany(domain) {
  const { data, mutate, error } = useSWR([`http://localhost:5000/companies/search?domain=${domain}`], fetcher, {
    refreshInterval: 1000,
  });

  return {
    isLoading: !error && !data,
    isError: error,
    company: data,
    mutate,
  };
}
