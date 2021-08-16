import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { api } from "../services/api";
import styles from "../styles/home.module.scss";
import { useCoins } from "../hooks/useCoins";

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
  total_volume: number;
}

export default function Home() {

  const { search, filteredCoins } = useCoins();

  // const [ cryptoList, setCryptoList ] = useState<CoinProps[]>([]);

  // useEffect( () => {
  //   api.get('/coins/markets', {
  //     params: {
  //       vs_currency: 'usd',
  //       per_page: 50
  //     }
  //   }).then( ({data}) => setCryptoList(data));
  // }, []);

  return (
    <div className={styles.tableContent}>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Moeda</th>
          <th>Simbolo</th>
          <th>Preço</th>
          <th>Variação (24hr)</th>
          <th>Volume (24hr)</th>
        </tr>
      </thead>
      <tbody>
        {filteredCoins && filteredCoins.map( coin => (
            <tr key={coin.id}>
              <td><FaRegStar /></td>
              <td className={styles.coinName}>
                <Image src={coin.image} alt="Simbol" width={20} height={20} />
                <p>{coin.name}</p>
              </td>
              <td>{coin.symbol}</td>
              <td>{  
                new Intl.NumberFormat('en-US' , {style: 'currency', currency: 'USD'}).format(coin.current_price)
              }</td>
              <td className={ coin.price_change_percentage_24h < 0 ? styles.negative : '' }>{ 
                coin.price_change_percentage_24h.toFixed(2) + " %"
              }</td>
              <td>{
                new Intl.NumberFormat('en-US' , {style: 'currency', currency: 'USD'}).format(coin.total_volume)
              }</td>
            </tr>
            
        )) }
      </tbody>
    </table>
    </div>
  )
}
