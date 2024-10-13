import React from 'react'

import dealsImg from "../../assets/deals.png"

const DealsSection = () => {
  return (
    <section className='deals__container'>
        {/* <div className='deals__image '>
            <img src={dealsImg} alt="" className=''/>
        </div> */}
        <div className='deals__content'>
            <h5>Get up o 20% Discount</h5>
            <h4>Deals of the month</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi at, doloribus rerum ratione tenetur perspiciatis omnis repellendus obcaecati blanditiis culpa, aperiam mollitia hic consequatur esse consectetur earum optio cupiditate tempore.</p>

            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Secs</p>
                </div>
                
            </div>

        </div>

    </section>
  )
}

export default DealsSection