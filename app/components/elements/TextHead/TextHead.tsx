export enum Presets {
    Heading1= "text-head1",
    Heading2= "text-head2",
    Heading3= "text-head3",
    Heading4= "text-head4",
    Heading5= "text-head5",
    Heading6= "text-head6",
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
