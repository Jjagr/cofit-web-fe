
type Props = {
    text: string
    icon?: JSX.Element
    color: string
}

const IconText = ({text, icon, color}: Props) => {
    return (
        <div className={"flex flex-row items-center bg-orange-yellow-y " + color}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <p className="text-body4 font-medium bg-opacity-0">{text}</p>
        </div>
    )
}

export default IconText;
