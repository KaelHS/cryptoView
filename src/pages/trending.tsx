import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../services/api";

import styles from '../styles/table.module.scss';

interface TrendingCoinsProps {
    score: number;
    id: string;
    name: string;
    symbol: string;
    small: string;
    price_btc: number;
}

export default function Trending() {


    // const { trendingCoins } = useCoins();
    const [trendingCoins, setTrendingCoins ] = useState<any[]>([]);
    const [ usdPrice, setUsdPrice ] = useState(0);

    useEffect(() => {


        async function getData() {
            

            const btcUsd = await api.get('/simple/price?ids=bitcoin&vs_currencies=usd');
            setUsdPrice(btcUsd.data.bitcoin.usd);

            const trendingResponse = await api.get('/search/trending')
            setTrendingCoins(trendingResponse.data.coins);
        }

        getData();


    },[])

    return(
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Simbolo</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                        { trendingCoins && trendingCoins.map( tcoins => (

                            <tr key={tcoins.item.score}>
                                <td>{tcoins.item.score +1}</td>
                                <td>
                                    <Image src={tcoins.item.small} alt="simbol" width={20} height={20} />
                                    <p>{tcoins.item.name}</p>
                                </td>
                                <td>{tcoins.item.symbol}</td>
                                <td>
                                {new Intl.NumberFormat('en-US' , {style: 'currency', currency: 'USD'}).format(tcoins.item.price_btc * usdPrice)}
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    );
}