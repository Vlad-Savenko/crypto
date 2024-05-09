import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import Services from "../../services/Services";


const ExchangeInfo = () => {

    const [markets, setMarkets] = useState([]);
    const { getMarkets, getPairs,getOneExchange } = Services();
    const {exchangeID} = useParams();
  
    useEffect(() => {
      updateInfo();
    }, [exchangeID]);

  ////////////////////////////////////////////1
    const addNewProperty = async (markets) => {
      let arr = [];
      const str = await markets.exchangeId.toLowerCase();
      const pairs = await getPairs(str);
      arr = pairs;

      compareCount(arr, markets);

      
    };
  
    const compareCount = (arr, markets) => {
      if (Array.isArray(markets) && Array.isArray(arr)) {
        const updatedMarkets = markets.map((market) => {
          const foundPair = arr.find((pair) => pair.exchangeId.toLowerCase() === market.exchangeId.toLowerCase());
          if (foundPair) {
            market.tradingPairs = foundPair.tradingPairs;
            market.exchangeUrl = foundPair.exchangeUrl;
          } else {
            market.tradingPairs = 'NaN';
          }
          return market;
        });
        setMarkets(updatedMarkets);
      }
    };
  
    const onLoadedMarkets = async (markets) => {
      setMarkets(markets);
    };
  
    const updateInfo = async () => {
      const markets = await getOneExchange(exchangeID);
      if (markets) { // Додайте перевірку на undefined перед використанням marketsData
        await onLoadedMarkets(markets);
        await addNewProperty(markets);
      }
    };
    const {name,rank,exchangeId,percentTotalVolume,volumeUsd,tradingPairs,exchangeUrl} = markets;
    return(
      <>
        <div>{name}</div>
        <div>{rank}</div>
        <div>{exchangeId}</div>
        <div>{percentTotalVolume}</div>
        <div>{volumeUsd}</div>
        <div>{tradingPairs}</div>
        <div>{exchangeUrl}</div>
      </>
    ) 
}

export default ExchangeInfo;