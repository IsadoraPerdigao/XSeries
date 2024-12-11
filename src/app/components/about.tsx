import styles from "../styles/about.module.css"
import { Button } from "./button"

export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.textContainer}>
                <h1>
                    About
                </h1>
                <ol>
                    <li>
                        Tucked away cosily in the lap of nature, this is the perfect destination getaway for a vacation trip near Delhi and Chandigarh.
                    </li>
                    <li>
                        The tourist-favourite Bhimtal Lake is only a stone’s throw away. <span className={styles.linkSpan}>Read more</span>
                    </li>
                </ol>
            </div>
            <div className={styles.buttonsContainer}>
                <Button text="House Rules" disabled={false} bgColor="buttonTransparent"/>
                <Button text="Cancellation Policy" disabled={false} bgColor="buttonTransparent"/>
                <Button text="Things you need to know" disabled={false} bgColor="buttonTransparent"/>
                <Button text="Things to do" disabled={false} bgColor="buttonTransparent"/>
            </div>
        </div>
    )
}