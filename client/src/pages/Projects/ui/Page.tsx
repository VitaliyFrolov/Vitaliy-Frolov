'use client'
import { Container } from '@/shared/ui/Container';
import { Title } from "@/shared/ui/Title";  
import styles from './Page.module.scss';
import ProjectList from "./ProjectList";

export default function Page() {
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
                            Projects
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