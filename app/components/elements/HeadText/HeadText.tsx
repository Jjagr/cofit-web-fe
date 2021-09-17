import { Presets, Align } from 'types/TextStyles'

type Props = {
    preset: Presets,
    align?: Align,
    text: string
};

const HeadText = ({preset,align,text} : Props) => {
    return (
        <p className={[preset,(align?align:Align.Center)].join(" ")}>
            {text}
        </p>
    );
}

export default HeadText;
