import { Presets, Align, Weight } from 'types/TextStyles'

type Props = {
    preset: Presets,
    align?: Align,
    weight?: Weight,
    text: string
};

const BodyText = ({preset,align,weight,text} : Props) => {
    return (
        <div className={[preset,(align?align:Align.Center),(weight?weight:Weight.Normal)].join(" ")}>
            {text.split("\n").map((line,idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
}

export default BodyText;
