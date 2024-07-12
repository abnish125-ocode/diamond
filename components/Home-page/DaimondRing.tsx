import Image from "next/image";
import styles from "@/styles/home-page/DiamondRing.module.css"

const DiamondRing = () => {
    return (
        <>
            <div className={styles.rings}>


                <div className={styles.react} style={{ width: '25%', marginTop: '-21px' }}>
                    <Image
                        src={'/Group 628.png'}
                        alt="ring"
                        width={357}
                        height={378}
                        style={{ width: '100%', height: '100%', }}
                    />
                    <div>
                        <span>Engagement Rings</span>
                    </div>
                </div>

                <div className={styles.react} style={{ width: '25%', marginTop: '-21px' }}>
                    <Image
                        src={'/Group 625.png'}
                        alt="ring"
                        width={357}
                        height={378}
                        style={{ width: '100%', height: '100%', }}
                    />
                    <div>
                        <span>Wedding Rings/Bands</span>
                    </div>

                </div>

                <div className={styles.react} style={{ width: '25%', marginTop: '-21px' }}>
                    <Image
                        src={'/Group 626.png'}
                        alt="ring"
                        width={357}
                        height={378}
                        style={{ width: '100%', height: '100%', }}
                    />
                    <div>
                        <span>Fine Jewelry</span>
                    </div>
                </div>

                <div className={styles.react} style={{ width: '25%', }}>
                    <Image
                        src={'/Group 627.png'}
                        alt="ring"
                        width={357}
                        height={357}
                        style={{ width: '100%', height: '100%' }}
                    />
                    <div>
                        <span>Gifts</span>
                    </div>
                </div>

                {/* <Image
                src={'/Group 625.png'}
                alt="ring"
                width={357}
                height={378}
                style={{width: '25%',height: '100%', marginTop: '-21px'}}
                />
                <Image
                src={'/Group 626.png'}
                alt="ring"
                width={357}
                height={378}
                style={{width: '25%',height: '100%', marginTop: '-21px'}}
                />
                <Image
                src={'/Group 627.png'}
                alt="ring"
                width={357}
                height={357}
                style={{width: '25%',height: '100%'}}
                /> */}
            </div>
        </>
    )
}
export default DiamondRing;