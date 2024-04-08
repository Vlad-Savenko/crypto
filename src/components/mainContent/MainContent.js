
import { useEffect, useState } from 'react'
import crypto from '../../resources/img/crypto.jpg'

import Services from '../../services/Services'


const MainContent = () => {
    
    const [coins,setCoins] = useState([])

    const {getCrypto} = Services();

    useEffect(() => {
        updateInfo()
    }, [])
    
    const onLoadedCrypto = (coins) => {
        setCoins(coins)
    }

    const updateInfo = () => {
        getCrypto(4)
            .then(onLoadedCrypto)
    }

    function renderItems(arr) {
        const items = arr.map(({ id, name, rank, priceUsd,explorer,i}) => (
            <div className="item min-w-20 max-w-48" key={i} >
                <div class=" p-4 border rounded-lg shadow bg-teal-100 border-blue-700 ">
                <a href={explorer}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-500"> Rank {rank}</p>
                <div href="#" class="inline-flex items-center font-mono px-3 py-2 text-sm font-medium text-center text-white bg-emerald-300 rounded-lg hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300">
					Price: {parseFloat(priceUsd).toFixed(2)}
                </div>
                </div>
            </div>
        ));
    
        return (
            <div className='flex justify-center '>{items}</div>
        );
    }
    const items = renderItems(coins)


    return (
        <div className='About'>
            <div className="grid grid-cols-2 items-center">
                <div className="text-9xl ">
                    About <span className="text-sky-400">Crypto</span>
                </div>
                <div className=""><img src={crypto} alt="err" /></div>
                <div>
            </div>
        </div>
            <div className='col-span-2 flex justify-center p-20'>
        		{items}
        	</div>
        </div>
    )
}



export default MainContent