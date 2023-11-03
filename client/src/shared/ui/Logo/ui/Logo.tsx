import { FC } from "react";
import { PageURL } from "@/shared/lib/routes";
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
               Logo
            </Link>
        </div>
    )
};