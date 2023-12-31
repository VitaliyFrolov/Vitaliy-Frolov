'use client'
import { FC } from "react";
import { Container } from "../../Container";
import { Title } from "../../Title";
import styles from './Footer.module.scss'

export const Footer: FC = () => {
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
                                    Email
                            </Title>
                        </li>
                        <li className={styles.item}>
                            <a 
                                className={styles.link}
                                href="mailto:vitaliy.frolov.200117@gmail.com"
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
                                Links
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