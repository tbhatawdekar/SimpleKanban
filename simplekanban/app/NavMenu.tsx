import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import { SignInButton } from '@/components/buttons';
import { SignOutButton } from '@/components/buttons';
import AuthCheck from '@/components/AuthCheck';


export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image src="/skblogo.png" width={210} height={80} alt="SimpleKanban Logo" />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/mykanban'}>My Kanban</Link> 
                </li>
                <li>
                    <SignInButton /> 
                </li>
                <li>
                    <AuthCheck>
                        <SignOutButton />
                    </AuthCheck>
                </li>
            </ul>
        </nav>
    );
}