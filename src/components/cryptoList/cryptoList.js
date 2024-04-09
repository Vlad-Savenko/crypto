import { useState,useEffect } from "react";
import Services from "../../services/Services";
import { Link } from "react-router-dom";

const CryptoList = () => {
    const [coins,setCoins] = useState([])
    const [prevCoins,setPrevCoins] = useState([])

    const {getCrypto} = Services();

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateInfo()
        },3000)
        updateInfo()
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    useEffect(() => {
        if (coins.length > 0) {
            const newPrices = {};
            coins.forEach(({ id, priceUsd }) => {
                newPrices[id] = parseFloat(priceUsd);
            });
            if (JSON.stringify(newPrices) !== JSON.stringify(prevCoins)) {
                console.log('Ціни змінилися:', newPrices);
                setPrevCoins(newPrices);
            }
        }
    }, [coins, prevCoins]);
    
    const onLoadedCrypto = (coins) => {
        setCoins(coins)
    }

    const updateInfo = () => {
        getCrypto(20)
            .then(onLoadedCrypto)
            .then(setInterval)
    }


    return (
        <div className="Crypto w-full">
                <h1 className="text-8xl text-center">CryptoList</h1>
                <div className="List w-3/4 m-auto">
                    <div className="card mt-5">
                        <div className="item ">
                                    <div class=" p-4 border rounded-lg shadow  flex justify-between items-stretch ">
                                        <div className="text-xl" >
                                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-black w-60'>Назва</h5>
                                        </div>
                                            <p className="font-normal text-gray-700 dark:text-gray-500 text-center w-20"> Rank </p>
                                            <div className="w-36">Price:</div>
                                    </div>
                                </div>
                        </div>
                            {coins.map(({id, name, rank, priceUsd,explorer,symbol},i) => {

                            let textStyle = {fontSize: '20px'}

                            if(name.length > 11) {
                                textStyle = {fontSize: '16px'};
                            } 
                            return(
                            <div className="card" key={i}>
                                <Link to={`/crypto/${id}`}>
                                <div className="item">
                                    <div class=" p-4 border rounded-lg shad flex justify-between items-stretch ">
                                        <div className="text-xl" >
                                            <div className='w-60' style={textStyle}><span className="font-bold text-xl">{symbol}</span> <span className="text-gray-400 text-xl">{name}</span></div>
                                        </div>
                                            <p className="font-normal text-gray-700 dark:text-gray-500 text-center w-20"> Rank {rank}</p>
                                            <a href={explorer} class={`inline-flex items-center font-mono px-3 py-2 text-sm font-medium text-white bg-emerald-300 rounded-lg hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 w-36 text-right`}>
                                            Price: {parseFloat(priceUsd).toFixed(2)}
                                        </a>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
export default CryptoList;