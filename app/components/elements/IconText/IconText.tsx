
type Props = {
    text: string
    icon?: JSX.Element
    color: string
}

const IconText = ({text, icon, color}: Props) => {
    return (
        <div className={"flex flex-row items-center " + color}>
            {icon}
            <p className="text-body4 font-regular bg-opacity-0 px-1">{text}</p>
        </div>
    )
}

export default IconText;
