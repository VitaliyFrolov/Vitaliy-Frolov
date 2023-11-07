'use client'
import { useState, useEffect } from "react";
import { Container } from "@/shared/ui/Container/index";
import { Title } from "@/shared/ui/Title";
import Image from "next/image";
import Img from '../../../../public/images/VitaliyFrolov.webp';
import styles from './Page.module.scss';
import axios from "axios";
import ContactData from "./ContactData";
import WorkHistory from "./WorkHistiry";

export default function Page () {
    const [ stack, setStack ] = useState<any>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_stack/').then((res) => (setStack(res.data.stack[0])));
    }, []);

    return (
        <Container> 
            <section className={styles.about}>
                <header className={styles.about__header}> 
                    <Title
                        tag="h2"
                        size="m"
                        className={styles.header__title}
                    >
                        <p>
                            About
                        </p>
                    </Title>
                    <div className={styles.header__infoWrapper}>
                        <Image
                            src={Img}
                            width={480}
                            height={480}
                            alt={'About'}
                            sizes='(max-width:480px) 100vw'
                            className={styles.header__img}
                        />
                        <Image
                            src={Img}
                            width={280}
                            height={280}
                            alt={'About'}
                            sizes='(max-width:280px) 100vw'
                            className={styles.header__img_mobile}
                        />
                        <article className={styles.header__textWrapper}>
                            <Title
                                className={styles.header__title_name}
                                tag="h2"
                                size="l"
                            >
                                <p>
                                    I’m <span className={styles.underline}>Vitaliy Frolov</span>, frontend developer
                                </p>
                            </Title>
                            <p className={styles.header__text_city}>
                                from St. Petersburg.  
                            </p>
                            <p className={styles.header__text}>
                                In the summer of 2022, I connected with web development into my life and am still doing it today. I believe that technology makes people’s lives better and I want to contribute to this. I love with the web and everything connected with it!
                            </p>
                            <div className={styles.table}>
                                <Title
                                    tag="h2"
                                    size="l"
                                    className={styles.table__title}
                                >
                                    <p>
                                        My technology stack
                                    </p>
                                </Title>
                                <ul className={styles.table__list}>
                                    <li className={styles.table__item}>
                                        <p className={styles.table__text}>
                                            {stack.column_1}
                                        </p>
                                    </li>
                                    <li className={styles.table__item}>
                                        <p className={styles.table__text}>
                                            {stack.column_2} 
                                        </p>
                                    </li>
                                    <li className={styles.table__item}>
                                        <p className={styles.table__text}>
                                            {stack.column_3}
                                        </p>
                                    </li>
                                    <li className={styles.table__item}>
                                        <p className={styles.table__text}>
                                            {stack.column_4}
                                        </p>
                                    </li>
                                    <li className={styles.table__item}>
                                        <p className={styles.table__text}>
                                            {stack.column_5}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </header>
               <WorkHistory />
                <ContactData /> 
                <div className={styles.about__outro}>
                    <p className={styles.outro__text}>
                        <a
                            href='https://github.com/VitaliyFrolov'
                            className={styles.outro__link}
                            target="_blank" 
                        >
                            *Everything you can see on this website was created by me.
                        </a>
                    </p>
                </div>
            </section>
        </Container>
    )
};