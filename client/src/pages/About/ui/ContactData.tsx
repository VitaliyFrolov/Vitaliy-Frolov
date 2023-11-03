'use client'
import { Title } from '@/shared/ui/Title';
import { useTranslations } from 'next-intl'
import styles from './ContactData.module.scss'

export const ContactData = () => {
    const t = useTranslations('aboutPage');

    return (
        <section className={styles.contactData}>
            <header className={styles.contactData__header}>
                <Title className={styles.contactData__title}>
                    <p>
                        {t('contact-data')}
                    </p>
                </Title>
            </header>
            <div className={styles.contactData__content}>
                    <ul className={styles.contactData__list}>
                        <li className={styles.contactData__item}>
                            <a 
                                href='https://github.com/VitaliyFrolov'
                                className={styles.contactData__link}
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
                            >
                                <p className={styles.contactData__text}>
                                    GitHub: VitaliyFrolov
                                </p>
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.contactData_list}>
                        <li className={styles.contactData__item}>
                            <p className={styles.contactData__text}>
                                Gmail: vitaliy.frolov.200117@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
        </section>
    )
};