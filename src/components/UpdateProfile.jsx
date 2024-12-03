import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import png1 from "../assets/img/avatars/1.png"

const UpdateProfile = () => {
  return (
    
   <>
   <Navbar/>

   <div className="container-xxl flex-grow-1 container-p-y">
  <div className="row">
    <div className="col-md-12">
      
      <div className="card mb-6">
        {/* Account */}
        <div className="card-body">
          <div className="d-flex align-items-start align-items-sm-center gap-6">
            <img
              src={png1}
              alt="user-avatar"
              className="d-block w-px-100 h-px-100 rounded"
              id="uploadedAvatar"
            />
            <div className="button-wrapper">
              <label
                htmlFor="upload"
                className="btn btn-sm btn-primary me-3 mb-4"
                tabIndex={0}
              >
                <span className="d-none d-sm-block">Upload new photo</span>
                <i className="ri-upload-2-line d-block d-sm-none" />
                <input
                  type="file"
                  id="upload"
                  className="account-file-input"
                  hidden=""
                  accept="image/png, image/jpeg"
                />
              </label>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger account-image-reset mb-4"
              >
                <i className="ri-refresh-line d-block d-sm-none" />
                <span className="d-none d-sm-block">Reset</span>
              </button>
              <div>Allowed JPG, GIF or PNG. Max size of 800K</div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <form id="formAccountSettings" method="GET" onsubmit="return false">
            <div className="row mt-1 g-5">
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue="John"
                    autofocus=""
                  />
                  <label htmlFor="firstName">Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-merge">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      defaultValue="202 555 0111"
                      placeholder="202 555 0111"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    defaultValue="john.doe@example.com"
                    placeholder="john.doe@example.com"
                  />
                  <label htmlFor="email">E-mail</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    defaultValue="Pune"
                  />
                  <label htmlFor="city">City</label>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    id="profession"
                    name="profession"
                     defaultValue="Software Developer"
                    placeholder="Software Developer"
                  />
                  <label htmlFor="profession">Profession</label>
                </div>
              </div>
              
              
              
              
              
              
            </div>
            <div className="mt-6">
              <button type="submit" className="btn btn-primary me-3">
                Save changes
              </button>
              <button type="reset" className="btn btn-outline-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
        {/* /Account */}
      </div>
      <div className="card">
        <h5 className="card-header">Delete Account</h5>
        <div className="card-body">
          <form id="formAccountDeactivation" onsubmit="return false">
            <div className="form-check mb-6 ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="accountActivation"
                id="accountActivation"
              />
              <label className="form-check-label" htmlFor="accountActivation">
                I confirm my account deactivation
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-danger deactivate-account"
              disabled="disabled"
            >
              Deactivate Account
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


   <Footer/>
   </>

  )
}

export default UpdateProfile