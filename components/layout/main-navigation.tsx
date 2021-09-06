import Logo from './logo'
import Link from 'next/link'
import styles from '@/styles/main-navigation.module.css';

const MainNavigation: React.FC = () => {
    return <header className={styles.header}>
        <Link href="/">
            <a><Logo/></a>
        </Link>
        <nav>
            <ul>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation