'use client'
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.scss';
import axios from 'axios';

export interface IProjectListProps {
    id: number
    title: string;
    description: string;
    link: string;
    tag_1?: string;
    tag_2?: string;
    tag_3?: string;
    tag_4?: string;
    tag_5?: string;
    tag_6?: string;
}

interface IProjectListMode {
    sliceMode: boolean
}


export default function ProjectList ({sliceMode}: IProjectListMode) {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);
    let slice;

    if (sliceMode === true) {
        slice = 3
    } else {
        slice = data.length
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_projects/').then((res) => (setData(res.data.projects)));
        setLoading(false);
    }, []); 

    return (
        <div className={styles.projects}>
            <ul className={styles.projects__list}>
                {data.slice(0, slice).map((item: IProjectListProps) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        url={item.link}
                        tag_1={item.tag_1}
                        tag_2={item.tag_2}
                        tag_3={item.tag_3}
                        tag_4={item.tag_4}
                        tag_5={item.tag_5}
                        tag_6={item.tag_6}
                    />
                ))}
            </ul>
        </div>
    )
};