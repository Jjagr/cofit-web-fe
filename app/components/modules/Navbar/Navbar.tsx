import { Presets } from 'types/TextStyles'
import styles from './Navbar.module.css'
import HeadText from '@element/HeadText/HeadText'
import NavItem from '@element/NavItem/NavItem'

const Navbar = ({}) => {
    return (
        <div className={styles.navbar}>
            <div className="flex justify-start items-center">
                <div className={styles.circle} />
                <HeadText 
                    text="COFIT"
                    preset={Presets.Heading6}
                />
            </div>
            <div className="flex justify-end text-body2 font-medium">
                <NavItem href="/nest" label="FitNest"/>
                <NavItem href="/move" label="FitMove"/>
                <NavItem href="/eat" label="FitEat"/>
                <NavItem href="/login" label="Login"/>
            </div>
        </div>
    )
}

export default Navbar;
