import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../services/api";

import styles from '../styles/table.module.scss';


interface EventProps {
    title: string;
    organizer: string;
    city: string;
    website: string;
}

export default function Events() {

    const [ events, setEvents ] = useState<EventProps[]>([])

    useEffect( () => {
        api.get('/events').then( ({data}) => setEvents(data.data));
        
    }, []);

    return(
        <div className={styles.tableContainer}>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Organizador</th>
                    <th>Local</th>
                    <th>Site</th>
                </tr>
            </thead>
            <tbody>
                    { events && events.map( (event, index) => (

                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{event.title}</td>
                            <td>{event.organizer}</td>
                            <td>{event.city}</td>
                            <td className={styles.weblink}>
                                <Link href={event.website}><a target="_blank">{event.website}</a></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
    );
}