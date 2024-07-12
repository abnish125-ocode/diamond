import Image from "next/image";
import styles from '@/styles/home-page/Video.module.css'

const VideoSec = () => {
    return (
        <>
            <div className={styles.videosec} style={{
                backgroundColor: '#ACB2B3', width
                    : '100%', height: "562px",
            }}>

                <Image
                    //    src={'/Group 802.png'}
                    src={'/Rectangle 1583.png'}
                    alt="video"
                    height={562}
                    width={1440}
                    style={{ width: '100%' }}
                />
                <div className="container">
                    <div className="row">
                        <div className={styles.text}>
                            <h2>Design Your Engagement Ring</h2>
                            <p>With our easy-to-use ring design feature, you can create the engagement ring of your dreams.</p>
                            <button style={{ color: '#430707' }}>Start designing</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default VideoSec;