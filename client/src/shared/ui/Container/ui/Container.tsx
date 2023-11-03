import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Container.module.scss';

interface IContainerProps {
    children: any;
    className?: string;
}

export const Container: FC<IContainerProps> = ({children, className}) => {
    return (
        <div className={cn([styles.container, className])}>
            {children}
        </div>
    )
};