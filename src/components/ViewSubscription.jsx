import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import pricing from "../assets/img/illustrations/pricing-standard.png"

const ViewSubscription = () => {
  return (
    
  <>
 <Navbar/>

  <div className="container-xxl flex-grow-1 container-p-y">
  <div className="card">
    {/* Pricing Plans */}
    <div className="pb-sm-12 pb-2 rounded-top">
      <div className="container py-12">
        <h3 className="text-center mb-2 mt-0 mt-md-4">Subscription Detail</h3>
        
        
        <div className="pricing-plans row mx-4 gy-3 px-lg-12">
          
          {/* Standard */}
          <div className="col-lg mb-lg-0 mb-3 ">
            <div className="card border-primary border shadow-none col-6">
              <div className="card-body position-relative pt-4">
                
                <div className="my-5 pt-6 text-center">
                  <img
                    src={pricing}
                    alt="Standard Image"
                    height={100}
                  />
                </div>
                <h4 className="card-title text-center text-capitalize mb-1">
                  Standard
                </h4>
                
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <sup className="h6 pricing-currency mt-2 mb-0 me-1 text-body">
                      $
                    </sup>
                    <h1 className="price-toggle price-yearly text-primary mb-0">
                      40
                    </h1>
                    <h1 className="price-toggle price-monthly text-primary mb-0 d-none">
                      49
                    </h1>
                    <sub className="h6 text-body pricing-duration mt-auto mb-1">
                      /month
                    </sub>
                  </div>
                  <small className="price-yearly price-yearly-toggle text-muted">
                    $ 480 / year
                  </small>
                </div>
                <ul className="list-group ps-6 my-5 pt-4">
                  <li className="mb-4">Description</li>
                  <li className="mb-4">Validity</li>
                  <li className="mb-4">Start Date</li>
                  <li className="mb-4">End Date</li>
                  
                </ul>
                <a
                  href="auth-register-basic.html"
                  className="btn btn-primary d-grid w-100 waves-effect waves-light"
                >
                  Upgrade
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    {/*/ Pricing Plans */}
  </div>
</div>

<Footer/>

  </>

  )
}

export default ViewSubscription