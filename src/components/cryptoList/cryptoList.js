import { useState,useEffect } from "react";
import Services from "../../services/Services";
import { Link } from "react-router-dom";

const CryptoList = () => {
    const [coins,setCoins] = useState([])

    const {getCrypto} = Services();

    useEffect(() => {
        updateInfo()
    }, [])
    
    const onLoadedCrypto = (coins) => {
        setCoins(coins)
    }

    const updateInfo = () => {
        getCrypto(20)
            .then(onLoadedCrypto)
    }
    console.log(coins)

    return (
        <div className="Crypto w-full">
                <h1 className="text-8xl text-center">Вся крипта на СайТі</h1>
                <div className="card flex justify-center mt-5">
                    <div className="item w-1/2">
                                <div class=" p-4 border rounded-lg shadow bg-teal-100 border-blue-700 flex justify-between items-stretch ">
                                    <div className="text-xl" >
                                        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-black w-3'>Name</h5>
                                    </div>
                                        <p className="font-normal text-gray-700 dark:text-gray-500 text-center w-20"> Rank </p>
                                        <div>Price:</div>
                                </div>
                            </div>
                    </div>
                    {coins.map(({id, name, rank, priceUsd,explorer},i) => {

                        let textStyle = {fontSize: '20px'}

                        if(name.length > 11) {
                            textStyle = {fontSize: '16px'};
                        } 
                        return(
                        <div className="card flex justify-center" key={i}>
                            <div className="item w-1/2">
                                <div class=" p-4 border rounded-lg shadow bg-teal-100 border-blue-700 flex justify-between items-stretch ">
                                    <div className="text-xl" >
                                        <Link to={`/crypto/${id}`}>
                                        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-black w-3' style={textStyle}>{name}</h5>
                                        </Link>
                                    </div>
                                        <p className="font-normal text-gray-700 dark:text-gray-500 text-center w-20"> Rank {rank}</p>
                                        <a href={explorer} class="inline-flex items-center font-mono px-3 py-2 text-sm font-medium text-white bg-emerald-300 rounded-lg hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 w-36 text-right">
                                        Price: {parseFloat(priceUsd).toFixed(2)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}
export default CryptoList;