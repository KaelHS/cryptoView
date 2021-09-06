import React, { FormEvent, useState } from 'react';
import { IoIosFingerPrint } from 'react-icons/io';

import styles from './styles.module.scss';

const Login = () => {

    const [ name, setName ] = useState('');
    const [ position, setPosition ] = useState('');


    function handleSubmit(event: FormEvent) {

        event.preventDefault();

        
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <IoIosFingerPrint size="7rem" color="var(--blue)"/> 
                </div>
                <input 
                    type="text" 
                    value={name}
                    placeholder="Nome" 
                    onChange={({target}) => setName(target.value)}
                    required />
                <input 
                    type="text" 
                    name="position" 
                    value={position}
                    placeholder="Cargo" 
                    onChange={({target}) => setPosition(target.value)}
                    required />

                <input type="submit" value="Entrar" />
            </form>
        </div>
    );
}

export default Login;