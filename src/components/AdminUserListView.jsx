import React from 'react'
import png2 from "../assets/img/avatars/2.png"
import png7 from "../assets/img/avatars/7.png"
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const AdminUserListView = () => {
  return (
    
   <>
   <Navbar/>

   <div className="container-xxl flex-grow-1 container-p-y">
  <div className="row g-6 mb-6">
    <div className="col-sm-6 col-xl-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="me-1">
              <p className="text-heading mb-1">Session</p>
              <div className="d-flex align-items-center">
                <h4 className="mb-1 me-2">21,459</h4>
                <p className="text-success mb-1">(+29%)</p>
              </div>
              <small className="mb-0">Total Users</small>
            </div>
            <div className="avatar">
              <div className="avatar-initial bg-label-primary rounded">
                <div className="ri-group-line ri-26px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-xl-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="me-1">
              <p className="text-heading mb-1">Paid Users</p>
              <div className="d-flex align-items-center">
                <h4 className="mb-1 me-2">4,567</h4>
                <p className="text-success mb-1">(+18%)</p>
              </div>
              <small className="mb-0">Last week analytics</small>
            </div>
            <div className="avatar">
              <div className="avatar-initial bg-label-danger rounded">
                <div className="ri-user-add-line ri-26px scaleX-n1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-xl-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="me-1">
              <p className="text-heading mb-1">Active Users</p>
              <div className="d-flex align-items-center">
                <h4 className="mb-1 me-2">19,860</h4>
                <p className="text-danger mb-1">(-14%)</p>
              </div>
              <small className="mb-0">Last week analytics</small>
            </div>
            <div className="avatar">
              <div className="avatar-initial bg-label-success rounded">
                <div className="ri-user-follow-line ri-26px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-xl-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="me-1">
              <p className="text-heading mb-1">Pending Users</p>
              <div className="d-flex align-items-center">
                <h4 className="mb-1 me-2">237</h4>
                <p className="text-success mb-1">(+42%)</p>
              </div>
              <small className="mb-0">Last week analytics</small>
            </div>
            <div className="avatar">
              <div className="avatar-initial bg-label-warning rounded">
                <div className="ri-user-search-line ri-26px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Users List Table */}
  <div className="card">
    
    <div className="card-datatable table-responsive">
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
          style={{ width: 1394 }}
        >
          <thead>
            <tr>
              <th
                className="control sorting_disabled dtr-hidden"
                rowSpan={1}
                colSpan={1}
                style={{ width: 0, display: "none" }}
                aria-label=""
              />
              
              <th
                className="sorting sorting_desc"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 272 }}
                aria-label="User: activate to sort column ascending"
                aria-sort="descending"
              >
                Name
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 315 }}
                aria-label="Email: activate to sort column ascending"
              >
                Email
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 140 }}
                aria-label="Role: activate to sort column ascending"
              >
                Mobile
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 99 }}
                aria-label="Plan: activate to sort column ascending"
              >
                City
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 99 }}
                aria-label="Status: activate to sort column ascending"
              >
                Profession
              </th>
              <th
                className="sorting_disabled"
                rowSpan={1}
                colSpan={1}
                style={{ width: 145 }}
                aria-label="Actions"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td
                className="  control"
                tabIndex={0}
                style={{ display: "none" }}
              />
              
              <td className="sorting_1">
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper">
                    <div className="avatar avatar-sm me-4">
                      <img
                        src={png2}
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href="app-user-view-account.html"
                      className="text-heading text-truncate"
                    >
                      <span className="fw-medium">Zsazsa McCleverty</span>
                    </a>
                    
                  </div>
                </div>
              </td>
              <td>
                <span>zmcclevertye@soundcloud.com</span>
              </td>
              <td>
                <span className="text-truncate d-flex align-items-center text-heading">
                  
                  9091929394
                </span>
              </td>
              <td>
                <span className="text-heading">Pune</span>
              </td>
              <td>
                <span
                  
                  
                >
                  Developer
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                    data-bs-toggle="tooltip"
                    title="Delete Invoice"
                  >
                    <i className="bx bxs-trash-alt" />
                  </a>
                  <Link
                    to="/viewuser"
                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect"
                    data-bs-toggle="tooltip"
                    title="Preview"
                  >
                    <i className="bx bxs-show" />
                  </Link>
                  
                  
                </div>
              </td>
            </tr>
            <tr className="even">
              <td
                className="  control"
                tabIndex={0}
                style={{ display: "none" }}
              />
              
              <td className="sorting_1">
                <div className="d-flex justify-content-start align-items-center user-name">
                  <div className="avatar-wrapper">
                    <div className="avatar avatar-sm me-4">
                      <img
                        src={png7}
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href="app-user-view-account.html"
                      className="text-heading text-truncate"
                    >
                      <span className="fw-medium">Yoko Pottie</span>
                    </a>
                    
                  </div>
                </div>
              </td>
              <td>
                <span>ypottiec@privacy.gov.au</span>
              </td>
              <td>
                <span className="text-truncate d-flex align-items-center text-heading">
                  
                  9091929395
                </span>
              </td>
              <td>
                <span className="text-heading">Mumbai</span>
              </td>
              <td>
                <span
                  
                  
                >
                  Tester
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                    data-bs-toggle="tooltip"
                    title="Delete Invoice"
                  >
                    <i className="bx bxs-trash-alt" />
                  </a>
                  <Link
                    to="/viewuser"
                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect"
                    data-bs-toggle="tooltip"
                    title="Preview"
                  >
                    <i className="bx bxs-show" />
                  </Link>
                  
                  
                </div>
              </td>
            </tr>
           
            
            
            
           
           
           
            
          </tbody>
        </table>
        
       
      </div>
    </div>
   
  </div>
</div>

  <Footer/>

   </>

  )
}

export default AdminUserListView