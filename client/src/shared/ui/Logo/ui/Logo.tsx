'use client'
import { FC, useEffect } from "react";
import { PageURL } from "@/shared/lib/routes";
import Image from "next/image";
import logoIcn from '/public/svg/logo.svg'
import logoIcnWhite from '/public/svg/logoWhite.svg'
import Link from "next/link";
import styles from './Logo.module.scss';

export const Logo: FC = () => {
    return (
        <div 
            className={styles.logo}
            aria-label="logo"
        >
            <Link 
                href={PageURL.Home}
                className={styles.logo__link}
                tabIndex={1}
            >
                <Image
                    className={styles.logo__icn}
                    src={logoIcn}
                    width={32}
                    height={32}
                    alt={'Logo icn'}
                />
                <Image
                    className={styles.logo__icn_dark}
                    src={logoIcnWhite}
                    width={32}
                    height={32}
                    alt={'Logo icn'}
                />
            </Link>
        </div>
    )
};