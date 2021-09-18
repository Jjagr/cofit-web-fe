import Typical from 'react-typical'
import { useRouter } from 'next/router'

import BodyText from '@element/BodyText/BodyText'
import HeadText from '@element/HeadText/HeadText'

import { Presets, Weight } from 'types/TextStyles'

import Image from 'next/image'
import styles from './FeatureFitNestCard.module.css'

const questions = [
    "Gimana cara kurus tapi tetep makan enak?",
    1000,
    "Berapa lama dan kapan berjemur untuk vitamin D?",
    1000,
    "Kenapa bangun tidur selalu lelah?",
    1000
]

const FeatureFitNestCard = () => {
    const router = useRouter()

    return (
        <div className={styles.mainContainer}>
            <HeadText preset={Presets.Heading2} text="FitNest" />
            <div onClick={() => router.push('/nest')} className={styles.askBar}>
                <Image layout="fixed" width={16} height={16} src={'/assets/icon/question-mark-circle.svg'} />
                <Typical
                    steps={questions}
                    loop={Infinity}
                    wrapper="p"
                    className={styles.askBarPlaceholder}
                />
            </div>
            <BodyText preset={Presets.Body2} weight={Weight.Medium} text="Go ahead click the bar and ask anything!. This is the place for curious and informative people to ask and give information about healthy lifestyle! You could ask anything from basic to something advanced, you could even share your program or meal plan." />
        </div>
    )
}

export default FeatureFitNestCard