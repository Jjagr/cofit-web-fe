import styles from './InputBar.module.css'

type Props = {
    label?: string,
    placeholder?: string
    password: boolean,
    inline: boolean,
    width: string,
    shadow: boolean,
    leftIcon?: JSX.Element,
    rightIcon?: JSX.Element,
    leftOnclick?: any,
    rightOnclick?: any,
    onchange: any,
}

const InputBar = ({label, placeholder, password, inline, width, shadow, leftIcon, rightIcon, leftOnclick, rightOnclick, onchange}: Props) => {
    return (
        <div className={width}>
            {label && <label htmlFor={label} className="text-body3 font-normal">{label}</label> }
            {inline ? <br/>:null}
            <div className={styles.container + " " + (shadow ? styles.shadow:null)}>
                {leftIcon && (
                    <div className={styles["left-icon"]} onClick={leftOnclick}>
                        {leftIcon}
                    </div>
                )}
                <input
                    name={label}
                    type={password ? "password" : "text"}
                    className={leftIcon ? styles['input-icon'] : styles.input}
                    placeholder={placeholder}
                    onChange={onchange}
                />
                {rightIcon && (
                    <div className={styles['right-icon']} onClick={rightOnclick}>
                        {rightIcon}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputBar