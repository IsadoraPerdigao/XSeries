'use client'

import styles from "../styles/list.module.css"
import { PhotoCard } from "./photoCard"

interface ListProps {
    children: React.ReactNode;
    text: string;
}

export const List = ({text, children}: ListProps) => {
    return (
        <div>
            <h1>{text}</h1>
            <ul className={styles.listContainer}>
                {children}
            </ul>
        </div>
    )
}