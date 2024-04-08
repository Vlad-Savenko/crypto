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
    const {id,name,explorer} = crypto;
    return (
        <div className="About">
            <div>{id}</div>
            <div>{name}</div>
            <div>{explorer}</div>
        </div>
    )
}

export default CryptoInfo