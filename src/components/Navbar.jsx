import React from 'react'

import { Link } from 'react-router-dom'
import png1 from "../assets/img/avatars/1.png"

const Navbar = () => {

  

  

  return (
    
  <>
  <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme bg-white" id="layout-navbar">
  <div className="container-xxl">
    <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-6">
      <a href="index.html" className="app-brand-link gap-2">
        <span className="app-brand-logo demo">
          <span style={{ color: "var(--bs-primary)" }}>
            <svg
              width={30}
              height={24}
              viewBox="0 0 250 196"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                fill="currentColor"
              />
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                fill="black"
              />
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                fill="currentColor"
              />
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                fill="black"
              />
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                fill="white"
                fillOpacity="0.15"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                fill="white"
                fillOpacity="0.3"
              />
            </svg>
          </span>
        </span>
        <span className="app-brand-text demo menu-text fw-semibold ms-1">
          Materio
        </span>
      </a>
      <a
        href="javascript:void(0);"
        className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
      >
        <i className="ri-close-fill align-middle" />
      </a>
    </div>
    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0  d-xl-none  ">
      <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
        <i className="fa-solid fa-bars" />
      </a>
    </div>
    <div
      className="navbar-nav-right d-flex align-items-center"
      id="navbar-collapse"
    >
      <ul className="navbar-nav flex-row align-items-center ms-auto">
        
        
        {/* Style Switcher */}
        <li className="nav-item dropdown-style-switcher dropdown">
  <a
    className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
    href="javascript:void(0);"
    data-bs-toggle="dropdown"
  >
    <i className="bx bx-sun" />
  </a>
  <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
    <li>
      <a
        className="dropdown-item"
        href="javascript:void(0);"
        data-theme="light"
      >
        <span className="align-middle">
          <i className="bx bx-sun me-3" />
          Light
        </span>
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
        <span className="align-middle">
          <i className="bx bx-moon me-3" />
          Dark
        </span>
      </a>
    </li>
    
  </ul>
</li>

        {/* / Style Switcher*/}
        
        
        {/* User */}
        <li className="nav-item navbar-dropdown dropdown-user dropdown">
          <a
            className="nav-link dropdown-toggle hide-arrow p-0"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="avatar avatar-online">
              <img
                src={png1}
                alt=""
                className="w-px-40 h-auto rounded-circle"
              />
            </div>
          </a>
          <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
            <li>
              <a
                className="dropdown-item waves-effect"
                href="pages-account-settings-account.html"
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-2">
                    <div className="avatar avatar-online">
                      <img
                        src={png1}
                        alt=""
                        className="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 small">John Doe</h6>
                    <small className="text-muted">Admin</small>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item waves-effect"
                to="/viewprofile"
              >
                <i className="ri-user-3-line ri-22px me-2" />
                <span className="align-middle">My Profile</span>
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item waves-effect"
                href="pages-account-settings-account.html"
              >
                <i className="ri-settings-4-line ri-22px me-2" />
                <span className="align-middle">Settings</span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item waves-effect"
                href="pages-account-settings-billing.html"
              >
                <span className="d-flex align-items-center align-middle">
                  <i className="flex-shrink-0 ri-file-text-line ri-22px me-2" />
                  <span className="flex-grow-1 align-middle">Billing</span>
                  <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger h-px-20 d-flex align-items-center justify-content-center">
                    4
                  </span>
                </span>
              </a>
            </li>
            <li>
              <div className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item waves-effect"
                href="pages-pricing.html"
              >
                <i className="ri-money-dollar-circle-line ri-22px me-2" />
                <span className="align-middle">Pricing</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item waves-effect" href="pages-faq.html">
                <i className="ri-question-line ri-22px me-2" />
                <span className="align-middle">FAQ</span>
              </a>
            </li>
            <li>
              <div className="d-grid px-4 pt-2 pb-1">
                <a
                  className="btn btn-danger d-flex waves-effect waves-light"
                  href="auth-login-cover.html"
                  target="_blank"
                >
                  <small className="align-middle">Logout</small>
                  <i className="ri-logout-box-r-line ms-2 ri-16px" />
                </a>
              </div>
            </li>
          </ul>
        </li>
        {/*/ User */}
      </ul>
    </div>
    {/* Search Small Screens */}
    <div className="navbar-search-wrapper search-input-wrapper container-xxl d-none">
      <span
        className="twitter-typeahead"
        style={{ position: "relative", display: "inline-block" }}
      >
        <input
          type="text"
          className="form-control search-input border-0 container-xxl tt-input"
          placeholder="Search..."
          aria-label="Search..."
          autoComplete="off"
          spellCheck="false"
          dir="auto"
          style={{ position: "relative", verticalAlign: "top" }}
        />
        <pre
          aria-hidden="true"
          style={{
            position: "absolute",
            visibility: "hidden",
            whiteSpace: "pre",
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            fontSize: 15,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            wordSpacing: 0,
            letterSpacing: 0,
            textIndent: 0,
            textRendering: "auto",
            textTransform: "none"
          }}
        />
        <div
          className="tt-menu navbar-search-suggestion ps"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 100,
            display: "none"
          }}
        >
          <div className="tt-dataset tt-dataset-pages" />
          <div className="tt-dataset tt-dataset-files" />
          <div className="tt-dataset tt-dataset-members" />
          <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
            <div
              className="ps__thumb-x"
              tabIndex={0}
              style={{ left: 0, width: 0 }}
            />
          </div>
          <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
            <div
              className="ps__thumb-y"
              tabIndex={0}
              style={{ top: 0, height: 0 }}
            />
          </div>
        </div>
      </span>
      <i className="ri-close-fill search-toggler cursor-pointer" />
    </div>
  </div>
</nav>


 {/* Menu */}
 <aside
      id="layout-menu"
      className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0 border-top border-dark "
      data-bg-class="bg-menu-theme"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
      }}
    >
      <div className="container-xxl d-flex h-100">
        <a href="#" className="menu-horizontal-prev d-none" />
        <div className="menu-horizontal-wrapper">
          <ul className="menu-inner" style={{ marginLeft: 0 }}>
            {/* Dashboards */}
            <li className="menu-item active">
              <Link to="/admindashboard" className="menu-link ">
                <i className="menu-icon bx bxs-home" />
                <div data-i18n="Dashboards">Home</div>
              </Link>
             
            </li>
            {/* Layouts */}
            <li className="menu-item">
              <Link to="/subscriptionlistview" className="menu-link ">
                <i className="menu-icon bx bxs-book-add" />
                <div data-i18n="Layouts">Manage Subscription</div>
              </Link>
              
            </li>
            {/* Apps */}
            <li className="menu-item">
              <Link to="/adminuserlistview" className="menu-link ">
              <i className="menu-icon bx bxs-user-circle" />
                <div data-i18n="Apps">Manage User</div>
              </Link>
              
            </li>
            {/* Pages */}
            <li className="menu-item">
              <Link to="#" className="menu-link ">
                <i className="menu-icon bx bxs-data" />
                <div data-i18n="Pages">Manage Data</div>
              </Link>
              
            </li>
            
            <li className="menu-item">
  <Link to="/signup" className="menu-link ">
    <i className="menu-icon bx bx-upload" />
    <div data-i18n="Tables">File Upload</div>
  </Link>
  
</li>

            
            
          </ul>
        </div>
        <a href="#" className="menu-horizontal-next d-none" />
      </div>
    </aside>
    {/* / Menu */}

  </>

  )
}

export default Navbar