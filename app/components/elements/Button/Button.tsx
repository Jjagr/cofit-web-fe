import { MouseEventHandler } from "react"
import styles from './Button.module.css'

type Props = {
    color: "black" | "white" | "gray" | "none",
    children: React.ReactNode,
    onClick: MouseEventHandler
    className?: string,
    rounded: "rounded-24" | "rounded-10"
}

const Button = ({ color, children, className, onClick, rounded }: Props) => {
    return (
        <div onClick={onClick} className={
            color === "gray" 
            ? `${className} ${styles.button} lg:${rounded} rounded-10 bg-primary-700 text-primary-50` 
            : color === "black"
            ? `${className} ${styles.button} lg:${rounded} rounded-10 bg-black text-primary-50`
            : color === "white"
            ? `${className} ${styles.button} lg:${rounded} rounded-10 bg-primary-50`
            : `${className} ${styles.button} lg:${rounded} rounded-10 hover:shadow-none`}>
            {children}
        </div>
    )
}

export default Button