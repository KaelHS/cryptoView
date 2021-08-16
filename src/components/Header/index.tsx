import { useState } from 'react';
import { FaSearch} from 'react-icons/fa';
import { useCoins } from '../../hooks/useCoins';
import styles from './styles.module.scss';


export function Header(){

  const { search, getFilter } = useCoins();

    return(
        <header className={styles.headerContainer}>
            <div className={styles.searchBox}>
            <input 
                type="text"
                placeholder="Pesquisar" 
                value={search}
                onChange={ ({target}) => getFilter(target.value)}
            />
            <FaSearch />
            </div>

            <div className={styles.profile} >
                <div className={styles.info}>
                    <p>Kael Silva</p>
                    <span>kael_hs@hotmail.com</span>
                </div>
                <div className={styles.avatar}>
                    <p>KS</p>
                </div>
            </div>
        </header>
    );
}