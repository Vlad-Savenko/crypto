import { useState,useEffect } from "react";
import Services from "../../services/Services";
import { Link } from "react-router-dom";

const BirgeList = () => {
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

  const formatter = (num) => {
    if (num > 1000000000) {
      return (num / 1000000000).toFixed(2) + " b";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(2) + " m";
    } else if (num > 1000) {
      return (num / 1000).toFixed(2) + " th";
    }
    return num.toString();
  };



    return (
      <div className="Markets w-full">
        <div className="info h-1/5 w-full bg-sky-600/75 border-sky-500 grid">
            <div className="grid grid-cols-6 gap-4 justify-items-center content-center">
                <div className="text-white">Market Cap: $2.41T</div>
                <div className="text-white">EXCHANGE VOL:$88.62B</div>
                <div className="text-white">ASSETS:2,296</div>
                <div className="text-white">EXCHANGES:73</div>
                <div className="text-white">MARKETS:9,250</div>
                <div className="text-white ">BTC DOM INDEX:55.1%</div>
            </div>

        </div>

          <table className="w-3/5 mx-auto table-auto ">

              <thead>
              <tr className="border shadow-xs h-10">
                    	<th className="">Rank</th>
                    	<th className="">Name</th>
                    	<th className="w-4/3">Trades count</th>
                    	<th className="">Top Pair</th>
                    	<th className="">Volume(24hr)</th>
                    	<th className="">Total (%)</th>
                  </tr>
              </thead>
              <tbody>
                  {markets.map(({exchangeId,baseSymbol,quoteSymbol,volumeUsd24Hr,priceUsd,volumePercent,tradesCount24Hr,tradingPairs,exchangeUrl},i) => {
                    	return (
                    		<tr className="border shadow-xs h-10">
								<td className="text-center">{i + 1}</td>
								<td className="text-left"><Link to={`/exchange/${exchangeId.toLowerCase()}`}>{exchangeId}</Link></td>
								<td className="text-center ">{tradingPairs}</td>
								<td className="text-center">{baseSymbol + '/' + quoteSymbol}</td>
								<td className="text-center">{formatter(volumeUsd24Hr)}</td>
								<td className="text-center">{parseFloat(volumePercent).toFixed(2)}</td>
                        	</tr>
                      )
                  })}
              </tbody>
            </table>
      </div>
    );
  };
  
export default BirgeList;