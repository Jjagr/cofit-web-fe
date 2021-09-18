import Link from 'next/link'
import Image from 'next/image'
import { Presets } from 'types/TextStyles'
import styles from './Navbar.module.css'
import HeadText from '@element/HeadText/HeadText'
import NavItem from '@element/NavItem/NavItem'
import Button from '@element/Button/Button'

type Props = {
    bg: "transparent"|"white"
}

const Navbar = ({bg}: Props) => {
    let isTransparent = bg==="transparent";
    return (
        <div 
            className={`${styles.navbar} ${isTransparent?"bg-opacity-0 text-primary-50":"bg-primary-50 text-primary-900"}`}
        >
            <Link href="/" passHref>
                <div className="flex justify-start items-center cursor-pointer">
                        <Image
                            src="/assets/icon/COFIT.svg"
                            alt="Logo"
                            width={100}
                            height={24}
                        />
                </div>
            </Link>
            <div className="flex justify-end text-body2 font-medium grad">
                <NavItem href="/nest" label="FitNest"/>
                <NavItem href="/move" label="FitMove"/>
                <NavItem href="/eat" label="FitEat"/>
                <NavItem href="/login" label="Login"/>
                <Button
                    className="bg-secondary-orange text-primary-50"
                    color="none"
                    onClick={()=> window.scrollTo({
                        top: 10000,
                        behavior: 'smooth'
                    })}
                    rounded="rounded-24"
                >Get started</Button>
            </div>
        </div>
    )
}

export default Navbar;
