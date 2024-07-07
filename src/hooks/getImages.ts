import { API_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const getData = async () => {
  const res = await axios.get(
    `${BASE_URL}?query=$apartment-interior&page=1&per_page=4&client_id=${API_KEY}`
  );
  return res.data.results;
};

export function useGetImages() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["images"],
    queryFn: getData
  });

  useEffect(() => {
    if (isError) console.error("Error fetching data");
  }, [isError]);

  return { data, isLoading, isSuccess, isError };
}
