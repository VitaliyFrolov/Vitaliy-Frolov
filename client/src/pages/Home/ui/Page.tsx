'use client'
import { Container } from '@/shared/ui/Container/index';
import { Title } from '@/shared/ui/Title/index';
import { PageURL } from '@/shared/lib/routes';
import Image from 'next/image';
import Img from '../../../../public/images/VitaliyFrolov.webp';
import styles from './Page.module.scss';
import Link from 'next/link';
import ProjectList from '@/pages/Projects/ui/ProjectList';

export default function Page () {
    return (
        <Container>
            <section className={styles.page}>
                <div className={styles.header__wrapper}>
                    <header className={styles.header}>
                        <div className={styles.header__textWrapper}>
                            <p className={styles.header__text}>
                                Hi, my name is
                            </p>
                            <Title
                                tag="h1"
                                size="m"
                                className={styles.header__title}
                            >
                                Vitaliy Frolov
                            </Title>
                        </div>
                    </header>
                    <div className={styles.content__wrapper}>
                        <Image
                            src={Img}
                            object-fit='caver'
                            width={480}
                            height={480}
                            alt={'Vitaliy Frolov'}
                            sizes='(max-width:480px) 100vw'
                            className={styles.content__img}
                        />  
                        <Image
                            src={Img}
                            width={280}
                            height={280}
                            alt={'Vitaliy Frolov'}
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
                                        I’m a frontend <span className={styles.underline}>developer</span>
                                    </p>
                                </Title>
                                <p className={styles.mainInfo__text}>
                                    from St. Petersburg.   
                                </p>
                            </header>
                            <div className={styles.aboutMe}>
                                <p className={styles.aboutMe__content}>
                                    In the summer of 2022, I connected with <br />
                                    <span className={styles.bold}>web development into my life</span> and am still doing it today. I believe that technology makes people’s lives better and I want to contribute to this. I love with the web and everything connected with it!
                                </p>
                            </div>
                            <div className={styles.aboutMe}>
                                <p className={styles.aboutMe__link}>
                                    Here you can find <Link className={styles.link} href={PageURL.Projects}><span className={styles.bold}>my projects</span></Link> and learn a some things <Link className={styles.link} href={PageURL.About}><span className={styles.bold}>about me.</span></Link>
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
                            Projects
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
                            view all
                        </p>
                    </Link>
                </div>
            </section>
        </Container>
    )
};