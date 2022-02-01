import BodyText from '@element/BodyText/BodyText'
import Button from '@element/Button/Button'
import HeadText from '@element/HeadText/HeadText'
import InputBar from '@module/InputBar/InputBar'
import axios from 'axios'
import { useRef } from 'react'
import { Presets, Weight } from 'types/TextStyles'

import styles from './SubscribeCard.module.css'

const SubscribeCard = () => {
    const inputEmail = useRef(null);

    const postEmail = () => {
        if (inputEmail.current !== undefined && inputEmail.current !== null && inputEmail.current['value'] !== '') {
            fetch('https://zmhr5a0ki5.execute-api.ap-southeast-1.amazonaws.com/prod/subscriber/add', {
                method: "POST",
                body: JSON.stringify({
                    email: inputEmail.current['value']
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => alert("Thank you so much! Can't wait when you tried our product"))
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.footerTitle}>
                LET’S GET FIT WITH GROOFIT
            </div>
            <div className="h-8" />
            <BodyText preset={Presets.Body2} weight={Weight.Medium} text="Tell us your email so you could be the first to try our lovely product!" />
            <div className={styles.formContainer}>
                <InputBar inputRef={inputEmail} width={"w-full"} inline={false} placeholder="Enter your email" shadow />
                <Button className="lg:ml-6 lg:mt-0 mt-4" rounded="rounded-10" onClick={postEmail} color="gray">
                    <BodyText preset={Presets.Body1} weight={Weight.Medium} text="Subscribe" />
                </Button>
            </div>
        </div>
    )
}

export default SubscribeCard