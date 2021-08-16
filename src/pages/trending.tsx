import Image from "next/image";
import { useEffect, useState } from "react";
import { useCoins } from "../hooks/useCoins";
import { api } from "../services/api";

import styles from '../styles/home.module.scss';

interface TrendingCoinsProps {
    score: number;
    id: string;
    name: string;
    symbol: string;
    small: string;
    price_btc: number;
}

export default function Trending() {


    const { trendingCoins } = useCoins();


    const [ usdPrice, setUsdPrice ] = useState(0);

    useEffect(() => {

        api.get('/simple/price', {
            params: {
                ids: 'bitcoin',
                vs_currencies: 'usd'
            }
        }).then( ({data}) => setUsdPrice(data.bitcoin.usd));

        console.log(usdPrice);

    },[])

    return(
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Simbolo</th>
                        <th>Preço ( BTC )</th>
                    </tr>
                </thead>
                <tbody>
                        { trendingCoins && trendingCoins.map( tcoins => (

                            <tr key={tcoins.item.score}>
                                <td>{tcoins.item.score +1}</td>
                                <td>
                                    {/* <Image src={tcoins.item.small} alt="simbol" width={20} height={20} /> */}
                                    <p>{tcoins.item.name}</p>
                                </td>
                                <td>{tcoins.item.symbol}</td>
                                <td>{tcoins.item.price_btc}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    );
}