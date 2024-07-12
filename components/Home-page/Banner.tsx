import Image from "next/image";
import styles from '@/styles/home-page/Banner.module.css'
import Link from "next/link";
const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <Image
                    src={'/Screen Shot 2022-09-14 at 10.57 2.png'}
                    alt="image"
                    width={720}
                    height={656}
                    style={{ width: '50%', height: 'auto', filter: 'blur(1px)' }}
                />
                <Image
                    src={'/3720a3866fda69ca1f603c13716c185d 3.png'}
                    alt="image"
                    width={720}
                    height={656}
                    style={{ width: '50%', height: 'auto', filter: 'blur(1px)' }}
                />
                <div className={styles.headings}>
                    <span>
                        The Next Generation of Diamond Brilliance
                    </span>
                    <Link href={'/'} >SHOP NOW</Link>
                </div>
            </div>
            {/* <div className={styles.banner}> */}

            {/* </div> */}
        </>
    )
}
export default Banner;