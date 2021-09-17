import styles from './IntroFact.module.css'

const IntroFact = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}>
                “Only
                <span className="font-bold"> 20% </span>
                of Indonesians<br/>
                understand about 
                <span className="font-bold"> healthy lifestyle</span><br/>
                and implement it”
            </div>
        </div>
    )
}

export default IntroFact