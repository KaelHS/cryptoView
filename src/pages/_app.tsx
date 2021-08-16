import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { CoinContextProvider } from '../hooks/useCoins';

import styles from '../styles/appStyle.module.scss';
import  '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <CoinContextProvider>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Header  />
          <Component {...pageProps} />
        </main>

      </div >
      </CoinContextProvider>
    </>
  );
}
export default MyApp
