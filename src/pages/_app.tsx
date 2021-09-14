import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { CoinContextProvider } from '../hooks/useCoins';

import styles from '../styles/appStyle.module.scss';
import  '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>CryptoView - Uma nova perspective sobre criptos </title>
    </Head>
    <CoinContextProvider>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Header  />
          <div>

            <Component {...pageProps} />
          </div>
        </main>

      </div >
      </CoinContextProvider>
    </>
  );
}
export default MyApp
