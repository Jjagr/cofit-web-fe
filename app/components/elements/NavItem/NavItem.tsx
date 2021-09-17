import Link from 'next/link';
import styles from './NavItem.module.css';

type Props = {
    label: string,
    href: string,
    
}

const NavItem = ({label, href}: Props) => {
    return (
        <Link href={href} passHref>
            <div className={`${styles.navitem} cursor-pointer`}>
                {label}
            </div>
        </Link>
    )
}

export default NavItem;