'use client'
import { useState, useEffect } from "react";
import { Title } from '@/shared/ui/Title';
import axios from "axios";
import styles from './WorkHistory.module.scss';

export interface IAboutProps {
    id: number;
    work_date: string; 
    work_name: string;
}

export default function WorkHistory() {
    const [ loading, setLoading ] = useState(true);
    const [ works, setWorks ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_works/').then((res) => {(
            setWorks(res.data.works));
            setLoading(false)});
    }, [loading]);
    
    return (
        <section className={styles.about__works}>
            <header className={styles.works__header}>
                <Title
                    tag="h2"
                    size="m"
                >
                    Work history
                </Title>
            </header>
            <div>
                { loading ? <div className={styles.works__loading}><span className={styles.loadingText}>Loading...</span></div> : <>
                    {works.map((item: IAboutProps) => (
                        <div key={item.id} className={styles.works__tableWrapper}>
                            <ul className={styles.table__list}>
                                <li className={styles.table__item}>
                                    <p className={styles.stack__text}>
                                        {item.work_date}
                                    </p>
                                </li>
                            </ul>
                            <ul className={styles.table__list}>
                                <li className={styles.table__item}>
                                    <p className={styles.table__text}>
                                        {item.work_name}
                                    </p>
                                </li>
                            </ul>
                        </div>  
                    ))} </> }
            </div>
        </section>
    )
};