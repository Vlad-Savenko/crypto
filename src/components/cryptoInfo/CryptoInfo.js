import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom"
import Services from "../../services/Services";


const CryptoInfo = () => {

    const {cryptoId} = useParams();
    const [crypto,setCrypto] = useState([])
    const {getOneCrypto} = Services();

    useEffect(() => {
        updateCrypto()
    },[cryptoId])

    const updateCrypto = () => {
        getOneCrypto(cryptoId)
            .then(cryptoLoaded)
    }
    const cryptoLoaded = (crypto) => {
        setCrypto(crypto)
    }
    const {name,explorer,symbol,priceUsd,supply} = crypto;
    return (
        <div className="About w-1/2  h-1/2 grid CryptoInfoCard p-4 border rounded-lg shadow justify-between items-stretch mx-auto">
            <div className="rounded-md border border-sky-500 border-double shadow-md p-4 grid grid-cols-2 gap-2 h-2/3">
                <div className="text-5xl font-mono text-center text-black-500 flex items-center ">{symbol}</div>
                <div className="text-xl font-mono text-gray-500 flex items-center">Price: {parseFloat(priceUsd).toFixed(2)}$</div>
                <div className="col-span-2 flex justify-between">
                    <div className="text-xl flex items-end mr-2 "> Coins mined --{`>`}</div>
                    <div className="text-xl font-mono text-gray-500 flex items-end "> {`<`}--{parseFloat(supply).toFixed(2)}</div>
                </div>
            </div>
            <div className=""> #</div>
            <div className=""> #</div>
        </div>
        
    )
}

export default CryptoInfo