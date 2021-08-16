import { FaCode, FaMoneyBill } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Sidebar(){
    return(
        <div className={styles.sidebarContainer}>
            <div>
                <FaCode size="2rem" />
                <h1>CryptoView</h1>
            </div>
            <ul>
                <li>
                    <FaMoneyBill />
                    <p>Cryptos</p>
                </li>
                <li>
                    <FaMoneyBill />
                    <p>Cryptos</p>
                </li>
                <li>
                    <FaMoneyBill />
                    <p>Cryptos</p>
                </li>
                <li>
                    <FaMoneyBill />
                    <p>Cryptos</p>
                </li>
                <li>
                    <FaMoneyBill />
                    <p>Cryptos</p>
                </li>
            </ul>
        </div>
    );
}