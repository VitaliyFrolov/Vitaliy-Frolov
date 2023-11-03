import { Title } from "@/shared/ui/Title";
import styles from './ProjectCard.module.scss';

export interface ICardProps {
    title: string;
    description: string;
    url: string;
    tag_1?: string;
    tag_2?: string;
    tag_3?: string;
    tag_4?: string;
    tag_5?: string;
    tag_6?: string;
}

export default function ProjectCard ({
    title, 
    description,
    url,
    tag_1,
    tag_2,
    tag_3,
    tag_4,
    tag_5,
    tag_6,
}: ICardProps) {
    return (
        <li 
            className={styles.card}
            aria-label={title}
        >
            <a
                href={url}
                className={styles.card__link}
                target="_blank"
            >
                <header className={styles.card__header}>
                    <Title
                        tag='h3'
                        size='s'
                        className={styles.card__title}
                    >
                        {title}
                    </Title>
                    <svg viewBox="0 0 24 24" width="24px" height="24px" fill='var(--svg-color)' ><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                </header>
                <p>
                    {description}
                </p>
                <div className={styles.tags}>
                    {tag_1 ? (
                        <span className={styles.tag}>
                            {tag_1}
                        </span>
                    ): null}
                    {tag_2 ? (
                        <span className={styles.tag}>
                            {tag_2}
                        </span>
                    ): null}
                    {tag_3 ? (
                        <span className={styles.tag}>
                            {tag_3}
                        </span>
                    ): null}
                    {tag_4 ? (
                        <span className={styles.tag}>
                            {tag_4}
                        </span>
                    ): null}
                    {tag_5 ? (
                        <span className={styles.tag}>
                            {tag_5}
                        </span>
                    ): null}
                    {tag_6 ? (
                        <span className={styles.tag}>
                            {tag_6}
                        </span>
                    ): null}
                </div>
            </a>
        </li>
    )
}