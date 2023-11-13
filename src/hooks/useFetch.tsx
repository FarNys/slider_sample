import React, { useState, useEffect } from "react";
import AxiosHttp from "../util/http/httpClient";

function useFetch<T>(url: string, params: Record<string, unknown> = {}) {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [data, setdata] = useState<T>();
  const [error, seterror] = useState<null | string | object>(null);

  useEffect(() => {
    setisLoading(true);
    AxiosHttp.get<T>(url, {
      params: { ...params },
    })
      .then((res) => setdata(res.data))
      .catch((err) => seterror(err))
      .finally(() => setisLoading(false));
  }, []);

  return { isLoading, data, error };
}

export default useFetch;
