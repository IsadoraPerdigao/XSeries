'use client'

import styles from "../styles/location.module.css"
import Image from "next/image"
import map from "../../assets/Map.svg"
import { Button } from "./button"

export const Location = () => {
    return (
        <div>
            <h1>Location</h1>
            <Image src={map} alt="Map" className={styles.map}/>
            <Button text="Get Direction" disabled={false} bgColor="buttonTransparent" />
        </div>
    )
}