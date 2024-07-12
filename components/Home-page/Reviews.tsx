import styles from '@/styles/home-page/Reviews.module.css';

const Reviews = ()=>{
    return(
        <>
          <div className={styles.reviews} style={{background: 'url(grain.png), linear-gradient(140.64deg, #661616 13.25%, #3E0404 88.64%)'}}>
            <div className="container-fluid">
                <div className="row" >
                    <div className={styles.reviewsec} >
                    <div className={styles.heading}>
                       <div className={styles.head}>
                        <p>Real Reviews From Real Customers</p>
                       </div>
                       <div className={styles.vector}>
                            <p>2033 Reviews</p>
                            <img src='/chevron (1).png' width={16} height={16} />
                            <img src='/chevron.png' width={16} height={16} />  
                       </div>
                    </div>
                    </div>
                    
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className={styles.sec}>
                        <div className="star">
                       <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                       </div>
                       <div className={styles.tagLine}>
                            <p>Perfect addition</p>
                       </div>
                       <div className={styles.discription}>
                        <p>Because it’s not only the green choice, it’s the most dazzling choice! Perfect stones at a fraction of the price – a true win/win!</p>
                       </div>
                       <div className={styles.admin}>
                        <p>- Alan F.</p>
                       </div>
                        </div>
                      
                    </div>
                    <div className="col-lg-4">
                    <div className={styles.sec}>
                    <div className="star">
                       <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                       </div>
                       <div className={styles.tagLine}>
<p>Fantastic look at the most affordable price!</p>
                       </div>
                       <div className={styles.discription}>
                        <p>The jewelry is beautiful, price is perfect, shipping is fast. Thanks!</p>
                       </div> <div className={styles.admin}>
                        <p>- Raymond R.</p>
                       </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className={styles.sec}>
                    <div className="">
                       <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                       </div>
                       <div className={styles.tagLine}>
<p>Worth it</p>
                       </div>
                       <div className={styles.discription}>
<p>Fantastic quality and impressive packaging. This is my third purchase and I will definitely be buying again.</p>
                       </div>
                       <div className={styles.admin}>
                        <p>- Adam M.</p>
                       </div>
                       </div>
                    </div>
                </div>
            </div>

          </div>
        </>
    )
}
export default Reviews;

/* Rectangle 15 */

// position: absolute;
// width: 1440px;
// height: 398px;
// left: calc(50% - 1440px/2);
// top: 3226px;

// /* Wine - Grain Gradient */
// background: url(grain.png), linear-gradient(140.64deg, #661616 13.25%, #3E0404 88.64%);

/* chevron */

// width: 16px;
// height: 16px;

// transform: rotate(-180deg);

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
/* Vector */

// position: absolute;
// left: 76.25%;
// right: -28.75%;
// top: 93.63%;
// bottom: -80.88%;

// background: #FFFFFF;
// transform: rotate(-180deg);
