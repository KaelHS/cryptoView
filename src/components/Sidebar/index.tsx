import { FaCode, FaMoneyBill } from 'react-icons/fa';
import { RiCoinsFill} from 'react-icons/ri';
import Link from 'next/link';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Sidebar(){
    return(
        <div className={styles.sidebarContainer}>
            <div className={styles.logo}>
                <RiCoinsFill size="3rem" color="var(--yellow-500)"/>
                <h1>CryptoView</h1>
            </div>

            <div className={styles.blockContainer}>
                <h1>Ativos</h1>
                <ul>
                    <li>
                        <ActiveLink activeClassName={styles.isActive} href="/">
                            <a>
                                Criptomoedas
                            </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink activeClassName={styles.isActive} href="/trending">
                            <a>
                                Trendings Coins
                            </a>
                        </ActiveLink>
                    </li>
                </ul>

            </div>
            <div className={styles.blockContainer}>
                <h1>Úteis</h1>
                <ul>
                    <li>
                        <ActiveLink activeClassName={styles.isActive} href="/exchanges">
                            <a>
                                Exchanges
                            </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink activeClassName={styles.isActive} href="/events">
                            <a>
                                Eventos
                            </a>
                        </ActiveLink>
                    </li>
                </ul>

            </div>


        </div>
    );
}