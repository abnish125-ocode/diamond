import styles from '@/styles/home-page/GiftGuide.module.css';
import Link from 'next/link';
 const Product = ()=>{
    return(
      <>
            <div className="container-fluid">
                <div className="row">
                    <div className={styles.heading}>
                        <h2>New in</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img src='/Image (1).png' style={{ width: '100%' }} />
                        <div className={styles.product}>
                            <p>Tapered Classic Round Cut Solitaire Engagement Ring</p>
                             <p>$479 </p>
                             <div className="">
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 5.png' />
                             </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src='/Image (2).png' style={{ width: '100%' }} />
                        <div className={styles.product}>
                           <p>Hidden Halo Accented Oval Cut Engagement Ring</p>
                           <p>$705 </p>
                             <div className="">
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 5.png' />
                             </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src='/Image (3).png' style={{ width: '100%' }} />
                        <div className={styles.product}>
                           <p>Cinderella Staircase Princess Cut Engagement Ring</p>
                           <p>$1,179 </p>
                             <div className="">
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 5.png' />
                             </div>
                        </div>
                    </div>
                    <div className="col-lg-3" >
                        <img src='/Image (4).png'   style={{ width: '100%', maxHeight: '516px' }} />
                        
                        <div className={styles.product}>
                            <p>6 Prong Solitaire Round Cut Engagement Ring</p>
                        <p>$519 </p>
                             <div className="">
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 4.png' />
                                  <img src='/Star 5.png' />
                             </div>
                        </div>

                    </div>
                </div>
                {/* <div className="row">
                    <div className={styles.btn}>
                        <button>Shop valentine’s guide</button>
                    </div>
                </div> */}
            </div>
      </>

    )
  }
  export default Product;



//   /* Image */

// width: 350px;
// height: 400px;

// background: url(Rectangle-1546-1.png);

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
