import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const sendRequest = useCallback(async (requestConfig = { url: '', method: 'GET', body: null, headers: null }, successCallback) => {

    try {
      setIsLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method
        , body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        , headers: requestConfig.headers
      })

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      successCallback(data);

    } catch (error) {
      setHasError({ error: error.message })
    }
    finally {
      setIsLoading(false);
    }

  }, []);

  return {
    isLoading
    , sendRequest
    , hasError
  };
}

export default useHttp;