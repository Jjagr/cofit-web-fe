export enum Presets {
    Heading1= "text-h1",
    Heading2= "text-h2",
    Heading3= "text-h3",
    Heading4= "text-h4",
    Heading5= "text-h5",
    Heading6= "text-h6",
}

type Props = {
    preset: Presets,
    text: string
};

const TextHead = ({preset,text} : Props) => {
    return (
        <p className={preset}>
            {text}
        </p>
    );
}

export default TextHead;
