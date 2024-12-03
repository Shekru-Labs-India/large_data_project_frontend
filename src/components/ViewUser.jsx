import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import png10 from "../assets/img/avatars/10.png"

const ViewUser = () => {
  return (
    
  <>
  <Navbar/>

  <div className="container-xxl flex-grow-1 container-p-y">
  <div className="row">
    {/* User Sidebar */}
    <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
      {/* User Card */}
      <div className="card mb-6 ">
        <div className="card-body pt-12"> 
          <div className="user-avatar-section">
            <div className=" d-flex align-items-center flex-column">
              <img
                className="img-fluid rounded mb-4"
                src={png10}
                height={120}
                width={120}
                alt="User avatar"
              />
              <div className="user-info text-center">
                <h5>Violet Mendoza</h5>
                <span className="badge bg-label-danger rounded-pill">
                  Author
                </span>
              </div>
            </div>
          </div>
          
          <h5 className="pb-4 border-bottom mb-4">Details</h5>
          <div className="info-container">
            <ul className="list-unstyled mb-6">
              <li className="mb-2">
                <span className="h6">Name: </span>
                <span>@violet.dev</span>
              </li>
              <li className="mb-2">
                <span className="h6">Email: </span>
                <span>vafgot@vultukir.org</span>
              </li>
              <li className="mb-2">
                <span className="h6">Mobile: </span>
                <span >
                  9091929394
                </span>
              </li>
              <li className="mb-2">
                <span className="h6">City: </span>
                <span>Pune</span>
              </li>
              <li className="mb-2">
                <span className="h6">Profession: </span>
                <span>Software Developer</span>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>
      {/* /User Card */}
      {/* Plan Card */}
      <div className="card mb-6 border border-2 border-primary rounded ">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <span className="badge bg-label-primary rounded-pill">
              Standard
            </span>
            <div className="d-flex justify-content-center">
              <sub className="h5 pricing-currency mb-auto mt-1 text-primary">
                $
              </sub>
              <h1 className="mb-0 text-primary">99</h1>
              <sub className="h6 pricing-duration mt-auto mb-3 fw-normal">
                month
              </sub>
            </div>
          </div>
          <ul className="list-unstyled g-2 my-6">
            <li className="mb-2 d-flex align-items-center">
              <i className="ri-circle-fill ri-10px text-body me-2" />
              <span>10 Users</span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <i className="ri-circle-fill ri-10px text-body me-2" />
              <span>Up to 10 GB storage</span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <i className="ri-circle-fill ri-10px text-body me-2" />
              <span>Basic Support</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="h6 mb-0">Days</span>
            <span className="h6 mb-0">26 of 30 Days</span>
          </div>
          <div className="progress mb-1 rounded" style={{ height: 6 }}>
            <div
              className="progress-bar rounded"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow={65}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <small>4 days remaining</small>
          <div className="d-grid w-100 mt-6">
            <button
              className="btn btn-primary waves-effect waves-light"
              data-bs-target="#upgradePlanModal"
              data-bs-toggle="modal"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
      {/* /Plan Card */}
    </div>
    {/*/ User Sidebar */}
    
  </div>
 
</div>

<Footer/>
  </>

  )
}

export default ViewUser