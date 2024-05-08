import { useState,useEffect } from "react";

import Services from "../../services/Services";

const ExchangeInfo = () => {

    const [markets, setMarkets] = useState([]);
    const { getMarkets, getPairs } = Services();
  
    useEffect(() => {
      updateInfo();
    }, []);
  ////////////////////////////////////////////1
    const addNewProperty = async (markets) => {
      let arr = [];
      for (const item of markets) {
        const str = await item.exchangeId.toLowerCase();
        const pairs = await getPairs(str);
        arr.push(pairs);
      }
      compareCount(arr, markets);
    };
  
    const compareCount = (arr, markets) => {
      if(markets) {
        markets.forEach((item, i) => {
          if (item && arr[i]) {
            if (item.exchangeId.toLowerCase() === arr[i].exchangeId) {
              item.tradingPairs = arr[i].tradingPairs;
              item.exchangeUrl = arr[i].exchangeUrl
            }
          } else {
            item.tradingPairs = 'NaN';
          }
          setMarkets([...markets]);
        });
      }
    };
  
    const onLoadedMarkets = async (markets) => {
      setMarkets(markets);
    };
  
    const updateInfo = async () => {
      const markets = await getMarkets(10);
      await onLoadedMarkets(markets);
      await addNewProperty(markets)
    };

    return(
        <h1>asd</h1>
    )
}

export default ExchangeInfo;