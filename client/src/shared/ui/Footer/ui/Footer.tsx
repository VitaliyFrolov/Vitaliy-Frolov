'use client'
import { FC } from "react";
import {useTranslations} from 'next-intl';
import { Container } from "../../Container";
import { Title } from "../../Title";
import styles from './Footer.module.scss';


export const Footer: FC = () => {
    const t = useTranslations('footer');

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Title
                                className={styles.title}
                                tag="h3"
                                size="l"
                                >
                                {t('email')}
                            </Title>
                        </li>
                        <li className={styles.item}>
                            <a 
                                className={styles.link}
                            >
                                vitaliy.frolov.200117@gmail.com
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Title
                            className={styles.title}
                            tag="h3"
                            size="l"
                            >
                                {t('links')}
                            </Title>
                        </li>
                        <li className={styles.item}>
                            <a 
                                href="https://t.me/FrolovVii"
                                className={styles.link}
                                target="_blank"
                            >
                                Telegtam
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a 
                                href="https://github.com/VitaliyFrolov"
                                className={styles.link}
                                target="_blank" 
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
};