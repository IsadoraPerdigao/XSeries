import Image from "next/image"
import Logo from "../../assets/Logo.svg"
import ImageSelector from "../../assets/ImageTransition.svg"
import DetailImage from "../../assets/DetailPhoto.svg"
import styles from "../styles/hero.module.css"

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.title}>
                <h1>Sea La Vie</h1>
                <p>Alibaug, Maharashtra</p>
                <div className={styles.smallLogo}>
                </div>
            </div>
            <Image src={ImageSelector} alt="Menu to check next photo" className={styles.menu}/>
            <Image src={DetailImage} alt="Smaller house picture" className={styles.detail}/>
        </div>
    )
}