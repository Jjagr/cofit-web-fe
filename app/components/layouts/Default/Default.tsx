import styles from './Default.module.css';
import Navbar from '@module/Navbar/Navbar';
import Footer from '@module/Footer/Footer';

type Props = {
    children: React.ReactNode
}

const Default = ({children}: Props) => {
    return (
        <div className="relative h-screen">
            <Navbar bg="transparent" />
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Default