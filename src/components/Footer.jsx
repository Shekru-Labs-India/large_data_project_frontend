import React from 'react'

const Footer = () => {
  return (
    
   <>
   {/* Footer */}
   <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl">
        <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
          <div className="text-body mb-2 mb-md-0 text-primary">
          © Copyright All Rights Reserved.{" "}
            <span className="text-danger">
              <i className="tf-icons ri-heart-fill" />
            </span>{" "}
            
            
          </div>

          <div className="mb-2 mb-md-0">
  <a
    href="https://www.facebook.com/share/ra9cKRDkDpy2W94j/?mibextid=qi2Omg"
    className="footer-link me-4"
    target="_blank"
  >
    <i className="bx bxl-facebook" />
  </a>
  <a
    href="https://www.instagram.com/autoprofito/?next=%2F"
    className="footer-link me-4"
    target="_blank"
  >
    <i className="bx bxl-instagram-alt" />
  </a>
  <a
    href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A "
    className="footer-link me-4"
    target="_blank"
  >
    <i className="bx bxl-youtube" />
  </a>
  <a
    href="https://www.linkedin.com/company/104616702/admin/dashboard/"
    className="footer-link me-4"
    target="_blank"
  >
    <i className="bx bxl-linkedin-square " />
  </a>
  <a
    href="https://www.threads.net/@autoprofito"
    className="footer-link me-4"
    target="_blank"
  >
    <i className="bx bxl-twitter"> </i>
  </a>
  <a
    href="https://t.me/Autoprofito"
    className="footer-link me-4"
    target="_blank"
  >
    <i className="bx bxl-telegram"> </i>
  </a>
</div>


          <div className="mb-2 mb-md-0 text-md-center ">
  <span>
    <p>
      <i className="bx bxs-zap" /> Powered by <br />
      <a href="https://www.shekruweb.com" target="_blank">
        Shekru Labs India Pvt. Ltd.
      </a>
    </p>
  </span>
</div>

        </div>
      </div>
    </footer>
    {/* / Footer */}
   </>

  )
}

export default Footer