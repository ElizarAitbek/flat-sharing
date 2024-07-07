import { axiosInstance } from "@/api/api";
import { API_KEY } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const getData = async () => {
  const res = await axiosInstance.get(
    `?query=$apartment-interior&page=1&per_page=4&client_id=${API_KEY}`
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
