import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const currencyApi = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(currencyApi)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => {
                return error
            });
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;
