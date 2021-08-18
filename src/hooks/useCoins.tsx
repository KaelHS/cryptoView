import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface CoinProps {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    image: string;
    price_change_percentage_24h: number;
    total_volume: number;
  }

  interface TrendingCoinsProps {
    score: number;
    id: string;
    name: string;
    symbol: string;
    small: string;
    price_btc: number;
}

interface coinContextProviderProps {
    children: ReactNode;
}

interface coinContextData {
    search: string;
    getFilter: (filter: string) => void;
    filteredCoins: CoinProps[];
    usdPrice: number;
}

const coinContext = createContext<coinContextData>( {} as coinContextData );

export function CoinContextProvider ({children}: coinContextProviderProps){

    const [ search, setSearch ] = useState('');
    const [ coins, setCoins ] = useState<CoinProps[]>([]);

    const [ usdPrice, setUsdPrice ] = useState(0);


    useEffect( () => {

      

      async function getData(){

        const marketsResponse = await api.get('/coins/markets', {
          params: {
            vs_currency: 'usd',
            per_page: 250, 
            order: 'market_cap_desc', //default
          }
        })
        setCoins(marketsResponse.data)




      }


      getData();

        
    

      }, []);

    function getFilter (filter: string) {
         setSearch(filter);
    }

    const filteredCoins = coins.filter( ( coin ) => coin.name.toLowerCase().includes(search.toLowerCase()));
      
    return(
        <coinContext.Provider value={{ search, getFilter, filteredCoins, usdPrice }}>
            {children}
        </coinContext.Provider>
    );
}

export function useCoins(){
    const context = useContext(coinContext);

    return context;
}