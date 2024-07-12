import styles from "@/styles/Header.module.css"
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (

        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src={'/DN_logowork_v2.png'}
                        alt="logo"
                        width={298}
                        height={72}
                    />
                </div>
                <div className={styles.nav}>
                    <Link href="/">Engagement</Link>
                    <Link href="/">Wedding</Link>
                    <Link href="/">Jewelry</Link>
                    <Link href="/">Education</Link>
                </div>
                <div className={styles.list}>
                    <Link href="/">1-800-509-4990</Link>

                    <Image
                        src={'/Search.svg'}
                        alt="logo"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={'/User.svg'}
                        alt="logo"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={'/Cart.svg'}
                        alt="logo"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={'/Heart.png'}
                        alt="logo"
                        width={24}
                        height={24}
                    />
                </div>
            </div>

        </>
    )
}
export default Header;