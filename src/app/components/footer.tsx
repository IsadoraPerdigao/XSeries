import styles from "../styles/footer.module.css"
import Image from "next/image"
import copyRight from "../../assets/CopyRight.svg"

export const Footer = () => {
    return (
        <div>
            <div className={styles.footerContainer}>
                <div>
                    <h2>Company</h2>
                    <p>SaffronStays</p>
                    <p>Signature</p>
                    <p>XSeries</p>
                    <p>About</p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p>SaffronStays</p>
                    <p>Signature</p>
                    <p>XSeries</p>
                    <p>About</p>
                </div>
                <div>
                    <h2>Contact</h2>
                    <a>mail@saffronstays.com</a>
                    <p>+91 3728253727</p>
                    <p>Contact us</p>
                    <p>Contact to Partner</p>
                </div>
                <div>
                    <h2>Partner with us</h2>
                    <p>List a home</p>
                </div>
                <div>
                    <h2>Policies</h2>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Sitemap</p>
                    <p>Cancellation Policy</p>
                </div>
            </div>
            <div className={styles.secondFooter}>
                <Image src={copyRight} alt="Copy Rigth Icon" />
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </div>
    )
}