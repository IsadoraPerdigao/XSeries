import styles from "../styles/button.module.css"

export const Button = ({text}: {text: string}) => {
    return (
        <button className={styles.button}>
            {text}
        </button>
    )
}