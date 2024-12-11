'use client'

import styles from "../styles/photosList.module.css"
import Image from "next/image"
import photo from "../../assets/Photo-card.svg"

export const PhotosList = () => {
    return (
        <div>
            <h1>Real Moments</h1>
            <ul className={styles.listContainer}>
                <Image src={photo} alt="house's picture" />
                <Image src={photo} alt="house's picture" />
                <Image src={photo} alt="house's picture" />
                <Image src={photo} alt="house's picture" />
            </ul>
        </div>
    )
}