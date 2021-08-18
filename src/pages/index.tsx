import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import styles from "../styles/table.module.scss";
import { useCoins } from "../hooks/useCoins";



export default function Home() {

  const { filteredCoins } = useCoins();

  return (
    <div className={styles.tableContainer}>
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
