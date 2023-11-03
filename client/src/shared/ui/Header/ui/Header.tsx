'use client'
import { FC, useEffect, useState } from "react";
import { Container } from "../../Container";
import { PageURL } from "@/shared/lib/routes";
import { openMenu } from "../lib/openMenu";
import { useTranslations } from 'next-intl';  
import cn from "classnames";
import Link from "next/link";
import styles from './Header.module.scss';
import { Logo } from "../../Logo";

export const Header: FC = () => {
    const [ menu, setMenu ] = useState(false);
    const t = useTranslations('header');

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.keyCode === 27) {
                setMenu(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
    }, [menu]);
    
    return (
        <header className={styles.header__wrapper}>
            <div className={styles.header}>
                <Container>
                    <div className={styles.header__content}>
                        <Logo />
                        <nav className={styles.nav}>
                            <ul className={styles.nav__list}>
                                <li className={styles.nav__item}>
                                    <Link
                                        href={PageURL.Home}
                                        className={cn([styles.nav__link])}
                                        tabIndex={2}
                                    >
                                        {t('home')}
                                    </Link>
                                </li>
                                <li className={styles.nav__item}>
                                    <Link
                                        href={PageURL.Projects}
                                        className={styles.nav__link}
                                        tabIndex={3}
                                    >
                                        {t('projects')}
                                    </Link>
                                </li>
                                <li className={styles.nav__item}>
                                    <Link
                                        href={PageURL.About}
                                        className={styles.nav__link}
                                        tabIndex={4}
                                    >
                                        {t('about')}
                                    </Link>
                                </li>
                            </ul>
                            <button
                                className={styles.nav__menu}
                                onClick={() => openMenu(menu, setMenu)}
                                tabIndex={2}
                            >
                                {menu ? (
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="var(--svg-color)"/>
                                    </svg>
                                ): (
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="var(--svg-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                )}
                            </button>
                        </nav>
                    </div>
                </Container>
            </div>
            {menu ? (
                <nav className={styles.nav__mobile}>
                <ul className={styles.nav__list_mobile}>
                    <li className={styles.nav__item_mobile}>
                        <Link
                            href={PageURL.Home}
                            className={styles.nav__link_mobile}
                            tabIndex={3}
                        >
                            {t('home__mobile')}
                        </Link>
                    </li>
                    <li className={styles.nav__item_mobile}>
                        <Link
                            href={PageURL.Projects}
                            className={styles.nav__link_mobile}
                            tabIndex={4}
                        >
                            {t('projects')}
                        </Link>
                    </li>
                    <li className={styles.nav__item_mobile}>
                        <Link
                            href={PageURL.About}
                            className={styles.nav__link_mobile}
                            tabIndex={5}
                        >
                            {t('about')}
                        </Link>
                    </li>
                </ul>
            </nav>
            ) : (
                null
            )}
        </header>
    )
};