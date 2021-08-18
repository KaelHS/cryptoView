import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCoins } from "../hooks/useCoins";
import { api } from "../services/api";

import styles from '../styles/table.module.scss';


interface ExchangesProps {
    id: string;
    name: string;
    image: string;
    country: string
    trust_score: number;
    url: string;

}

export default function Exchanges() {

    const { search } = useCoins();

    const [ exchanges, setExchanges ] = useState<ExchangesProps[]>([])

    useEffect( () => {
        api.get('/exchanges').then( ({data}) => setExchanges(data));
        
    }, []);

    const filteredExchanges = exchanges.filter( ( ex ) => ex.name.toLowerCase().includes(search.toLowerCase()));


    return(
        <div className={styles.tableContainer}>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Localização</th>
                    <th>Score</th>
                    <th>Site</th>
                </tr>
            </thead>
            <tbody>
                    { filteredExchanges && filteredExchanges.map( (company, index) => (

                        <tr key={company.id}>
                            <td>{index+1}</td>
                            <td>
                                <Image src={company.image} alt="simbol" width={20} height={20} />
                                <p>{company.name}</p>
                            </td>
                            <td>{company.country}</td>
                            <td>{company.trust_score}</td>
                            <td>
                                <Link href={company.url}><a target="_blank">{company.url}</a></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
    );
}