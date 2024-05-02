import { useState,useEffect } from "react";
import Services from "../../services/Services";
import { Link } from "react-router-dom";


const CryptoList = () => {
    const [coins,setCoins] = useState([])

    const {getCrypto} = Services();

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateInfo();
        }, 10000);
        updateInfo(); // Call initially
        return () => clearInterval(intervalId);
    }, []);

    const onRavno = async (coins) => {
        try {
            const data = await getCrypto(20);
            if (coins.length === 0) {
                setCoins(data);
            } else {
                const updatedCoins = coins.map((oldCoin, index) => {
                    const newCoin = data[index];
                    if (newCoin.priceUsd >= oldCoin.priceUsd) {
                        return { ...newCoin, statusCalculated: "true" };
                    } else {
                        return { ...newCoin, statusCalculated: "false" };
                    }
                });
                setCoins(updatedCoins);
            }
        } catch (error) {
            console.error("Error fetching crypto data:", error);
        }
    };

    const updateInfo = async () => {
        await onRavno(coins);
        console.log('update');
    };


    // let color  = {}

    // const changeColor = (coins) => {
    //     coins.forEach((element,i) => {
    //         if(element.statusCalculated === 'true') {
    //             console.log('Price is less ')
    //         } if (element.statusCalculated === 'false') {
    //             console.log('Price is more ')
    //         }
    //     })
    // }

    return (
        <div className="Crypto w-full">
                <h1 className="text-8xl text-center">CryptoList</h1>
                <div className="List w-3/4 m-auto">
                    <div className="card mt-5">
                        <div className="item ">
                                    <div className=" p-4 border rounded-lg shadow  flex justify-between items-stretch ">
                                        <div className="text-xl" >
                                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-black w-60'>Назва</h5>
                                        </div>
                                        <div className="text-xl" >
                                            <h5 className="font-normal text-gray-700 dark:text-gray-500 text-center w-60 text-xl">Обсяг за 24г</h5>
                                        </div>
                                            <p className="font-normal text-gray-700 dark:text-gray-500 text-center w-60 text-xl"> marketCapUsd </p>
                                            <div className="w-36 text-center">Price:</div>
                                    </div>
                                </div>
                        </div>
                            {coins.map(({id, name,marketCapUsd,priceUsd,volumeUsd24Hr,explorer,symbol,statusCalculated},i) => {

                            let textStyle = {fontSize: '20px'}

                            if(name.length > 11) {
                                textStyle = {fontSize: '16px'};
                            } 
                            return(
                            <div className="card" key={i}>
                                <Link to={`/crypto/${id}`}>
                                <div className="item">
                                    <div className=" p-4 border rounded-lg shad flex justify-between items-stretch ">
                                        <div className="text-xl" >
                                            <div className='w-60' style={textStyle}><span className="font-bold text-xl">{symbol}</span> <span className="text-gray-400 text-xl">{name}</span></div>
                                        </div>
                                            <div className="text-xl" >
                                                <h5 className="font-normal text-gray-700 dark:text-gray-500 text-center w-60 text-lg">{parseFloat(volumeUsd24Hr).toFixed(2)}$</h5>
                                            </div>
                                                <p className="font-normal text-gray-700 dark:text-gray-500 text-center w-60 text-lg">{parseFloat(marketCapUsd).toFixed(2)}$</p>
                                                    <a href={explorer} className={`inline-flex items-center font-mono px-3 py-2 text-sm font-medium text-white bg-emerald-300 rounded-lg hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 w-36 text-right` }>
                                                Price: {parseFloat(priceUsd).toFixed(2)}
                                        </a>
                                    </div>
                                </div>
                                </Link>
                                <div>{statusCalculated}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
export default CryptoList;
