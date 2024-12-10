import styles from "../styles/button.module.css"

interface ButtonProps {
    text: string;
    disabled: boolean;
    bgColor?: string;
}

export const Button = ({text, disabled, bgColor}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[bgColor || ""]}`} disabled={disabled}>
            {text}
        </button>
    )
}