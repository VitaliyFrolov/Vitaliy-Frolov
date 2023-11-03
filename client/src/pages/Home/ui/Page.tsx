'use client'
import { Container } from '@/shared/ui/Container/index';
import { Title } from '@/shared/ui/Title/index';
import { useTranslations } from 'next-intl'; 
import { PageURL } from '@/shared/lib/routes';
import Image from 'next/image';
import Img from '../../../../public/images/VitaliyFrolov.webp';
import styles from './Page.module.scss';
import Link from 'next/link';
import ProjectList from '@/pages/Projects/ui/ProjectList';

export default function Page () {
    const t = useTranslations('homePage');
    return (
        <Container>
            <section className={styles.page}>
                <div className={styles.header__wrapper}>
                    <header className={styles.header}>
                        <div className={styles.header__textWrapper}>
                            <p className={styles.header__text}>
                                {t('title-text')}
                            </p>
                            <Title
                            tag="h1"
                            size="m"
                            className={styles.header__title}>
                                {t('title')}
                            </Title>
                        </div>
                    </header>
                    <div className={styles.content__wrapper}>
                        <Image
                            src={Img}
                            object-fit='caver'
                            width={480}
                            height={480}
                            alt={t('alt-img')}
                            sizes='(max-width:480px) 100vw'
                            className={styles.content__img}
                        />  
                        <Image
                            src={Img}
                            width={280}
                            height={280}
                            alt={t('alt-img')}
                            sizes='(max-width:280px) 100vw'
                            className={styles.content__img_mobile}
                        />
                        <div className={styles.mainInfo}>
                            <header className={styles.mainInfo__header}>
                                <Title
                                    className={styles.mainInfo__title}
                                    tag="h2"
                                    size="l"
                                >
                                    <p className={styles.mainInfo__text}>
                                        {t('main-info_title')} <span className={styles.underline}>{t('main-info_title__underline')}</span>
                                    </p>
                                </Title>
                                <p className={styles.mainInfo__text}>
                                    {t('main-info_title-text')}    
                                </p>
                            </header>
                            <div className={styles.aboutMe}>
                                <p className={styles.aboutMe__content}>
                                    {t('main-info-content(1/2)')} <br />
                                    <span className={styles.bold}>{t('main-info-content(1/2)__underline')}</span> {t('main-info-content(2/2)')}
                                </p>
                            </div>
                            <div className={styles.aboutMe}>
                                <p className={styles.aboutMe__link}>
                                    {t('main info-link__text(1/2)')} <Link className={styles.link} href={PageURL.Projects}><span className={styles.bold}>{t('main info-link__projects')}</span></Link> {t('main info-link__text(2/2)')} <Link className={styles.link} href={PageURL.About}><span className={styles.bold}>{t('main info-link__about')}</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.projects}>
                <header className={styles.projects__header}>
                    <Title className={styles.projects_title}>
                        <p className={styles.projects__titleText}>
                            {t('title__projects')}
                        </p>
                    </Title>
                </header>
                <div className={styles.projects__wrapper}>
                    <ProjectList
                        sliceMode={true}
                    />
                </div>
                <div className={styles.button__wrapper}>
                    <Link
                        href={PageURL.Projects}
                        className={styles.button}
                    >
                        <p>
                            {t('btn__projects')}
                        </p>
                    </Link>
                </div>
            </section>
        </Container>
    )
};