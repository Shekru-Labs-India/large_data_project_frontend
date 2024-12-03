import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import profile_banner from "../assets/img/pages/profile-banner.png"
import png1 from "../assets/img/avatars/1.png"
import { Link,useNavigate } from 'react-router-dom'

const ViewProfile = () => {

  const navigate = useNavigate();

  const handleActiveSubscriptionClick = () => {
    navigate('/subscriptiondetail');
  };

  return (
    
  <>
  <Navbar/>

  <div className="container-xxl flex-grow-1 container-p-y">
  {/* Header */}
  <div className="row">
    <div className="col-12">
      <div className="card mb-6">
        <div className="user-profile-header-banner">
          <img
            src={profile_banner}
            alt="Banner image"
            className="rounded-top"
          />
        </div>
        <div className="user-profile-header d-flex flex-column flex-lg-row text-sm-start text-center mb-4">
          <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
            <img
              src={png1}
              alt="user image"
              className="d-block h-auto ms-0 ms-sm-5 rounded user-profile-img"
            />
          </div>
          <div className="flex-grow-1 mt-3 mt-lg-5">
            <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-4">
              <div className="user-profile-info">
                <h4 className="mb-2 mt-lg-6">John Doe</h4>
                <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                  <li className="list-inline-item">
                    <i className="ri-palette-line me-2 ri-24px" />
                    <span className="fw-medium">UX Designer</span>
                  </li>
                  <li className="list-inline-item">
                    <i className="ri-map-pin-line me-2 ri-24px" />
                    <span className="fw-medium">Vatican City</span>
                  </li>
                  <li className="list-inline-item">
                    <i className="ri-calendar-line me-2 ri-24px" />
                    <span className="fw-medium"> Joined April 2021</span>
                  </li>
                </ul>
              </div>
              <Link to="/updateprofile" className="btn btn-primary">
                <i className="ri-user-follow-line ri-16px me-1_5" />
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*/ Header */}
  
  {/* User Profile Content */}
  <div className="row">
    <div className="col-xl-4 col-lg-5 col-md-5">
      {/* About User */}
      <div className="card mb-6">
        <div className="card-body">
          <small className="card-text text-uppercase text-muted small">
            About
          </small>
          <ul className="list-unstyled my-3 py-1">
            <li className="d-flex align-items-center mb-4">
              
              <span className="fw-medium mx-2">Name:</span>{" "}
              <span>John Doe</span>
            </li>
            <li className="d-flex align-items-center mb-4">
              
              <span className="fw-medium mx-2">Email:</span>{" "}
              <span></span>
            </li>
            <li className="d-flex align-items-center mb-4">
              
              <span className="fw-medium mx-2">Mobile:</span>{" "}
              <span></span>
            </li>
            <li className="d-flex align-items-center mb-4">
              
              <span className="fw-medium mx-2">City:</span> <span></span>
            </li>
            <li className="d-flex align-items-center mb-2">
              
              <span className="fw-medium mx-2">Profession:</span>{" "}
              <span></span>
            </li>
            <li className="d-flex align-items-center mb-2">
            <div onClick={handleActiveSubscriptionClick}>
              <span className="fw-medium mx-2">Active Subscription:</span>{" "}
              </div>
              <span>Free</span>
            </li>


          </ul>
          
          
        </div>
      </div>
      {/*/ About User */}
      
    </div>
    
  </div>
  {/*/ User Profile Content */}
</div>


  <Footer/>
  </>

  )
}

export default ViewProfile