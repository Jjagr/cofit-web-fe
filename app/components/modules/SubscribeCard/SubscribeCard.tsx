import BodyText from '@element/BodyText/BodyText'
import Button from '@element/Button/Button'
import HeadText from '@element/HeadText/HeadText'
import InputBar from '@module/InputBar/InputBar'
import { Presets, Weight } from 'types/TextStyles'
import styles from './SubscribeCard.module.css'

const SubscribeCard = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.footerTitle}>
                LET’S GET FIT WITH COFIT
            </div>
            <div className="h-8" />
            <BodyText preset={Presets.Body2} weight={Weight.Medium} text="Tell us your email so you could be the first one to try our lovely product!" />
            <div className={styles.formContainer}>
                <InputBar width={"w-full"} inline={false} placeholder="Enter your email" shadow />
                <Button className="lg:ml-6 lg:mt-0 mt-4" rounded="rounded-10" onClick={() => console.log("yes")} color="gray">
                    <BodyText preset={Presets.Body1} weight={Weight.Medium} text="Subscribe" />
                </Button> 
            </div>
        </div>
    )
}

export default SubscribeCard