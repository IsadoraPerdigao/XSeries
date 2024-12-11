import styles from "../styles/houseDetailsCard.module.css"
import Image from "next/image"
import photo from "../../assets/House-photo.svg"

export const HouseDetailsCard = () => {
    return (
        <div className={styles.cardContainer}>
            <Image src={photo} alt="house's picture" className={styles.image} />
            <ul>
                <li>
                    Tucked away cosily in the lap of nature, this is the perfect destination getaway
                </li>
                <li>
                    The tourist-favourite Bhimtal Lake is only a stone’s throw away.
                </li>
            </ul>
        </div>
    )
}