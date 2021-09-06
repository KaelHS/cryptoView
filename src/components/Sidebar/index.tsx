import { FaCode, FaMoneyBill } from 'react-icons/fa';
import { RiCoinsFill} from 'react-icons/ri';
import Link from 'next/link';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

import { RiBitCoinFill } from 'react-icons/ri';
import { HiTrendingUp } from 'react-icons/hi';
import { IoStorefront } from 'react-icons/io5';
import { MdEventNote } from 'react-icons/md';

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
                        <RiBitCoinFill size="1.25rem" color="var(--gray-50)"/>  
                        <ActiveLink activeClassName={styles.isActive} href="/">
                            <a>
                                Criptomoedas
                            </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <HiTrendingUp size="1.25rem" color="var(--gray-50)"/>  
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
                        <IoStorefront size="1.25rem" color="var(--gray-50)"/>  
                        <ActiveLink activeClassName={styles.isActive} href="/exchanges">
                            <a>
                                Exchanges
                            </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <MdEventNote size="1.25rem" color="var(--gray-50)"/>  
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