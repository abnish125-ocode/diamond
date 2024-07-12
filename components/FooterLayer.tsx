import styles from "@/styles/FooterLayer.module.css";
import Link from "next/link";
 const FooterLayer = ()=>{
    return(
        <>
          <div className="" style={{marginTop:'60px'}}>
                <div className={styles.ribbon}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"style={{display: 'flex', alignItems:'center'}}>
                                <p className={styles.para}>Shipping to: United states($)</p>
                            </div>
                            <div className="col-lg-2">

                            </div>
                            <div className="col-lg-5" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                              <div className={styles.links}>
                                <Link href={'/'}>Membership</Link>
                                <Link href={'/'}>Terms and Conditions</Link>
                                <Link href={'/'}>Privacy Policy</Link>
                                <Link href={'/'}>© 2023 Diamond Nexus Inc.</Link>
                              </div>
                            </div>
                            <div className="col-lg-2">
                               <div className={styles.icons}>
                                 <img src="/Facebook.png" width={24} height={24} />
                                 <img src="/Instagram.png" width={24} height={24} />
                                 <img src="/Pinterest.png" width={24} height={24} />
                                 <img src="/Twitter.png" width={24} height={24} />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default FooterLayer;