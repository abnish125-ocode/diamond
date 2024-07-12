import styles from '@/styles/home-page/GiftGuide.module.css';
import Link from 'next/link';

const GiftGuide = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className={styles.heading}>
                        <h2>Gift Guide</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img src='/Screen Shot 2022-09-06 at 5.37 1.png' style={{ width: '100%' }} />
                        <div className={styles.title}>
                            <Link href={'/'}>Gifts For Her</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src='/2f12b4d5aac17dee939265af0b20c549.png' style={{ width: '100%' }} />
                        <div className={styles.title}>
                            <Link href={'/'}>Valentine’s Day Gifts</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src='/a704efa7499347f754438263967dac80 1.png' style={{ width: '100%' }} />
                        <div className={styles.title}>
                            <Link href={'/'}>Gifts For Him</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src='/bf33ddf3904a5db709881fca2fd4645b 1.png' style={{ width: '100%' }} />
                        
                        <div className={styles.title}>
                            <Link href={'/'}>Gifts Under $1000</Link>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className={styles.btn}>
                        <button>Shop valentine’s guide</button>
                    </div>
                </div>
            </div>
            {/* <div className={styles.gifts}>
               
                <div className="" style={{width: '25%'}}>
                    <img src='/Screen Shot 2022-09-06 at 5.37 1.png' style={{width: '100%'}} />
                </div>
                <div className="" style={{width: '25%'}}>
                    <img src='/2f12b4d5aac17dee939265af0b20c549.png' style={{width: '100%'}}  />
                </div>
                <div className="" style={{width: '25%'}}>
                    <img src='/a704efa7499347f754438263967dac80 1.png' style={{width: '100%'}} />
                </div>
                <div className="" style={{width: '25%'}}>
                    <img src='/bf33ddf3904a5db709881fca2fd4645b 1.png' style={{width: '100%'}} />
                </div>
            </div> */}
        </>
    )
}
export default GiftGuide;