'use client'
import { Title } from '@/shared/ui/Title';
import styles from './ContactData.module.scss'

export default function ContactData() {
    return (
        <section className={styles.contactData}>
            <header className={styles.contactData__header}>
                <Title className={styles.contactData__title}>
                    <p>
                        Contact details
                    </p>
                </Title>
            </header>
            <div className={styles.contactData__content}>
                    <ul className={styles.contactData__list}>
                        <li className={styles.contactData__item}>
                            <a 
                                href='https://t.me/FrolovVii'
                                className={styles.contactData__link}
                                target="_blank"
                            >
                                <p className={styles.contactData__text}>
                                    Telegram: @FrolovVii
                                </p>
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.contactData__list}>
                        <li className={styles.contactData__item}>
                            <a 
                                href='https://github.com/VitaliyFrolov'
                                className={styles.contactData__link}
                                target="_blank"
                            >
                                <p className={styles.contactData__text}>
                                    GitHub: VitaliyFrolov
                                </p>
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.contactData_list}>
                        <li className={styles.contactData__item}>
                            <a
                                className={styles.contactData__link}
                                href="mailto:vitaliy.frolov.200117@gmail.com"
                            >
                                <p className={styles.contactData__text}>
                                    Gmail: vitaliy.frolov.200117@gmail.com
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
        </section>
    )
};