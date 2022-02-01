import HeadText from "@element/HeadText/HeadText"

import styles from './IntroSlogan.module.css'
import { Presets, Weight } from "types/TextStyles"

const IntroSlogan = () => {
    return(
        <div className={styles.mainContainer}>
            <HeadText preset={Presets.Hero} text="Groofit"/>
            <div className={styles.subHeading}>
                <span className="font-bold">Community </span>
                where people help each other to be
                <span className="font-bold">  Fit</span>
                {/* <HeadText preset={Presets.Heading2} text="Community " inline/>
                <HeadText preset={Presets.Heading2} weight={Weight.Normal} text="where people help each other to be " inline/>
                <HeadText preset={Presets.Heading2} text="Fit" inline/> */}
            </div>
        </div>
    )
}

export default IntroSlogan