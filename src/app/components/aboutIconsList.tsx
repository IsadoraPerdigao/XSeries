import styles from "../styles/aboutIconsList.module.css"
import Image from "next/image"
import ellipse from "../../assets/Ellipse.svg"
import house from "../../assets/House.svg"
import people from "../../assets/Group.svg"
import bed from "../../assets/Bed 2.svg"
import paw from "../../assets/Paw.svg"

export const AboutIconsList = () => {
    return (
        <ol className={styles.iconsContainer}>
            <li className={styles.iconDiv}>
                <Image src={house} alt="House Icon" />
                <span>Entire Villa</span>
            </li>
            <Image src={ellipse} alt="Ellipse icon" />
            <li className={styles.iconDiv}>
                <Image src={people} alt="Icon with two people" />
                <span>6-12 Guests</span>
            </li>
            <Image src={ellipse} alt="Ellipse icon" />
            <li className={styles.iconDiv}>
                <Image src={bed} alt="Bed icon" />
                <span>8 Bedrooms</span>
            </li>
            <Image src={ellipse} alt="Ellipse icon" />
            <li className={styles.iconDiv}>
                <Image src={paw} alt="Paw icon" />
                <span>Pet-Friendly</span>
            </li>
        </ol>
    )
}