import { MouseEventHandler } from "react"
import styles from './Button.module.css'

type Props = {
    color: "black" | "white" | "gray" | "none",
    children: React.ReactNode,
    onClick: MouseEventHandler
    className?: string,
}

const Button = ({ color, children, className, onClick }: Props) => {
    return (
        <div onClick={onClick} className={
            color === "gray" 
            ? `${className} ${styles.button} bg-primary-700 text-primary-50` 
            : color === "black"
            ? `${className} ${styles.button} bg-black text-primary-50`
            : color === "white"
            ? `${className} ${styles.button} bg-primary-50`
            : `${className} ${styles.button}`}>
            {children}
        </div>
    )
}

export default Button