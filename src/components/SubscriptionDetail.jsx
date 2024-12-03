import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const SubscriptionDetail = () => {

  const navigate = useNavigate();

  return (
    
   <>
   <Navbar/>

   <div className="container-xxl container-p-y">
 
  <div className="card p-6">
    <div className="row align-items-center">
      <div className="col-3 text-start mb-5">
      <button 
                className="btn rounded-pill btn-outline-secondary btn-xs"
                onClick={() => navigate('/viewprofile')}  // Add this onClick handler
              >
                <i className="ri-arrow-left-double-line me-1 ri-md" /> Back
              </button>
      </div>
      <div className="col-6 text-center mb-5">
        <h5 className="mb-0">Subscription</h5>
      </div>
      <div className="col-12 col-md-3 col-lg-3 text-end mb-5">
        <a href="/teacher/payment_history">
          <button className="btn rounded-pill btn-outline-secondary btn-xs">
            <span className="text-black">
              <i className="ri-money-rupee-circle-line me-1 ri-lg" />{" "}
              <span>Payment History</span>
            </span>
          </button>
        </a>
      </div>
    </div>
   
    
    <div className="row">
      <div className="col-12 mt-4 p-5">
        <div
          className="card mb-6 border border-2 card-hover1 rounded"
          role="button"
        >
          <div className="card-body">
  <div className="row">
    <div className="col-12 text-end">  {/* Changed to full width and text-end */}
      <div className="d-flex justify-content-end flex-wrap">  {/* Removed -md from justify-content */}
        <span className="btn rounded-pill btn-xs btn-outline-info bg-label-info me-2 mt-2">
          <i className="ri-checkbox-circle-line text-info ri-lg me-1" />
          <span className="text-capitalize">Free</span>
        </span>
      </div>
    </div>
  </div>
            <div className="row mt-6 mt-md-0 mt-lg-0">
              <div className="col-12 col-md-6 col-lg-6 mt-1">
                
                <div>
                  <div className="column mt-1">
                    <div className="row">
                      <div className="col-6 mt-6">
                        <span className="fs-6 fs-md-5 d-block">
                          <strong>Days</strong>
                        </span>
                      </div>
                      <div className="col-6 text-end mt-6">
                        <span className="fs-5 d-block">
                          <strong className="fs-6 fs-md-5 d-block">
                            0 Of 180 Days
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "0%" }}
                    />
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <span className="d-block mt-2" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className="fs-5 d-block">
                  <strong className="fs-3">₹0</strong>
                  <small className="ms-2">Per 180 Days</small>
                </span>
                <span className="d-block mt-3">
                  <small>This is free plan</small>
                </span>
                <span className="d-block mt-5">
                  <strong>Expire Date 31-May-2025</strong>
                </span>
                <span className="d-block">
                  <small>
                    We will send you a notification upon subscription expiration
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
 
</div>

<Footer/>

   </>

  )
}

export default SubscriptionDetail