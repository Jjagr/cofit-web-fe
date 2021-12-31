
type Props = {
    text: string
    icon?: JSX.Element
    className: string
}

const IconText = ({text, icon, className}: Props) => {
    return (
        <div className={"flex flex-row items-center " + className}>
            {icon}
            <p className="font-regular bg-opacity-0 pl-2">{text}</p>
        </div>
    )
}

export default IconText;
