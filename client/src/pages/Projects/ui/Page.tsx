'use client'
import { Container } from '@/shared/ui/Container';
import {useTranslations} from 'next-intl';
import { Title } from "@/shared/ui/Title";  
import styles from './Page.module.scss';
import ProjectList from "./ProjectList";

export default function Page() {
    const t = useTranslations('projectsPage');
    return (
        <Container>
           <section className={styles.projects}>
                <header className={styles.projects__header}>
                    <Title
                        tag="h2"
                        size="m"
                        className={styles.projects__title}
                    >
                        <p>
                            {t('title')}
                        </p>
                    </Title>
                </header>
                <div>
                    <ProjectList
                        sliceMode={false}
                    />
                </div>
           </section>
        </Container>
    )
};