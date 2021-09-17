import { MouseEventHandler } from "react";

type Props = {
    label: string
    value: string
    name?: string
    onClick: MouseEventHandler
}

const Checkbox = ({label, value, name, onClick}: Props) => {
    return (
        <>
        <input type="checkbox" id={value} name={name} value={value}/>
        <label htmlFor={value} className="pl-1">{label}</label>
        </>
    )
}

export default Checkbox
