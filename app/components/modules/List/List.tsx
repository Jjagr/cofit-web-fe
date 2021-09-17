import styles from './List.module.css';
import HeadText from '@element/HeadText/HeadText';
import Checkbox from '@element/Checkbox/Checkbox';
import { Presets, Align } from 'types/TextStyles';

type Props = {
    head: string
    items: Array<string>
    checkbox: boolean
    name?: string
}

const List = ({head, items, checkbox, name}: Props) => {
    return (
        <div className="flex flex-col">
            <div className="border-primary-200 border-b py-1">
                <HeadText
                    preset={Presets.Heading6}
                    align={Align.Left}
                    text={head}
                />
            </div>
            <ul>
                {items.map((item,idx) => (
                    <li key={idx} className={styles.item}>
                        {!checkbox 
                            ? item 
                            : <Checkbox
                                label={item}
                                name={name}
                                value={idx.toString()}
                                onClick={()=>console.log("test")}
                            />}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;