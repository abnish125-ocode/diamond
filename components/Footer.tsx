 import styles from '@/styles/Footer.module.css';
 import style from '@/styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
 const Footer = ()=>{
    return(
        <>
          <div className="container">
            <div className="row">
                <div className="col-lg-2">
                     <div className={styles.link}>
                            <p>HELP</p>
                            <Link href={'/'}>Shipping</Link>
                            <Link href={'/'}>Returns & exchange</Link>
                            <Link href={'/'}>Warranty</Link>
                            <Link href={'/'}>Accessibility statement</Link>
                            <Link href={'/'}>FAQ</Link>
                            <Link href={'/'}>Contact us</Link>
                     </div>
                </div>
                <div className="col-lg-2">
                       <div className={styles.link}>
                        <p>Stores & Services</p>
                        <Link href={'/'}>Stores</Link>
                            <Link href={'/'}>Piercing studio</Link>
                            <Link href={'/'}>styling appointments</Link>
                            <Link href={'/'}>corporate code program</Link>
                     </div>
                    </div>
                    <div className="col-lg-2">
                    <div className={styles.link}>
                    <p>Resources</p>
                        <Link href={'/'}>Jewelry care</Link>
                            <Link href={'/'}>Ring sizer</Link>
                            <Link href={'/'}>Piercing aftercare</Link>
                            <Link href={'/'}>Style edit</Link>
                            <Link href={'/'}>Supplier code of conduct</Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    <div className={styles.link}>
                    <p>About Diamond Nexus</p>
                        <Link href={'/'}>Our mission</Link>
                            <Link href={'/'}>sustainability</Link>
                            <Link href={'/'}>Commitments</Link>
                            <Link href={'/'}>Materials</Link>
                            <Link href={'/'}>Reviews</Link>
                            <Link href={'/'}>Careers</Link>
                        </div>
                    </div>
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-3">
                    <div className={style.logo}>
                    <Image
                        src={'/DN_logowork_v2.png'}
                        alt="logo"
                        width={298}
                        height={72}
                    />
                </div>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur. Vel erat enim metus turpis egestas.</p>
                <button className={styles.btn}>
                join now for free
                </button>
                    </div>
            </div>
          </div>
        </>
    )
 }
 export default Footer;