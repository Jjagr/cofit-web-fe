import { Presets, Align, Weight } from 'types/TextStyles'

type Props = {
    preset: Presets,
    align?: Align,
    weight?: Weight,
    text: string,
    inline?: boolean
};

const HeadText = ({ preset, align, text, weight, inline = false }: Props) => {
    return (
        inline
            ? <span className={[preset, (align ? align : Align.Center), (weight ? weight : Weight.Bold)].join(" ")}>
                {text}
            </span>
            : <p className={[preset, (align ? align : Align.Center), (weight ? weight : Weight.Bold)].join(" ")}>
                {text}
            </p>
    );
}

export default HeadText;
