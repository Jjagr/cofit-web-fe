import BodyText from "@element/BodyText/BodyText"
import HeadText from "@element/HeadText/HeadText"
import SubscribeCard from "@module/SubscribeCard/SubscribeCard"
import { Presets } from "types/TextStyles"

import styles from './ComingSoonPage.module.css'

const ComingSoonPage = () => {
    return (
        <div className={styles.mainContainer}>
            <HeadText preset={Presets.Hero} text="COMING SOON"/>
            <SubscribeCard />
        </div>
    )
}

export default ComingSoonPage