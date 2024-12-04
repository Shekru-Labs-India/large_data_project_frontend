import React,{useState} from 'react'
import tree from '../assets/img/illustrations/tree.png'
import tree3 from '../assets/img/illustrations/tree-3.png'
import masklight from "../assets/img/illustrations/auth-basic-mask-light.png"
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [mobileNumber, setMobileNumber] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 10) {
      setMobileNumber(value)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (mobileNumber.length === 10) {
      setShowOtp(true)
      // Add your API call here to send OTP
      // Auto-focus first OTP input
      setTimeout(() => {
        document.getElementById('otp-0')?.focus()
      }, 0)
    }
  }
  

  const handleOtpChange = (index, value) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    
    // Auto-focus next input or submit if last digit
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleVerifyOtp = () => {
    const otpString = otp.join('')
    if (otpString.length === 4) {
      // Check mobile number and OTP combination
      if (mobileNumber === '9091929394' && otpString === '1234') {
        navigate('/admindashboard')
      } else if (mobileNumber === '9091929395' && otpString === '1234') {
        navigate('/userdashboard')
      } else {
        // Optional: Add error handling for invalid combinations
        console.log('Invalid mobile number or OTP combination')
      }
    }
  }


  return (
    
   <>
   <div className="position-relative">
  <div className="authentication-wrapper authentication-basic container-p-y">
    <div className="authentication-inner py-6 mx-4">
      {/* Login */}
      <div className="card p-7">
        {/* Logo */}
        <div className="app-brand justify-content-center mt-5">
          <a href="index.html" className="app-brand-link gap-3">
            <span className="app-brand-logo demo">
              <span style={{ color: "#9055FD" }}>
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
            <span className="app-brand-text demo text-heading fw-semibold">
              Materio
            </span>
          </a>
        </div>
        {/* /Logo */}
        <div className="card-body mt-1">
          <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
          <p className="mb-5">
            Please sign-in to your account and start the adventure
          </p>
          <form
                  id="formAuthentication"
                  className="mb-5 fv-plugins-bootstrap5 fv-plugins-framework"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <div className="form-floating form-floating-outline mb-5">
  <input
    type="text"
    className="form-control"
    id="mobile"
    value={mobileNumber}
    onChange={handleMobileChange}
    placeholder="Enter Mobile Number"
    autoFocus
    disabled={showOtp} // Disable when showing OTP
  />
  <label htmlFor="mobile">Mobile</label>
</div>

                  {showOtp && (
  <div className="mb-5">
    <div className="d-flex gap-2">
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          className="form-control text-center"
          style={{ flex: 1 }}
          value={otp[index]}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          maxLength={1}
        />
      ))}
    </div>
  </div>
)}

                  <div className="mb-5">
                    <button
                      className="btn btn-primary d-grid w-100 waves-effect waves-light"
                      type="button"
                      disabled={showOtp ? otp.join('').length !== 4 : mobileNumber.length !== 10}
                      onClick={showOtp ? handleVerifyOtp : handleLogin}
                    >
                      {showOtp ? 'Verify OTP' : 'Login'}
                    </button>
                  </div>
                </form>
          <p className="text-center mb-5">
            <span>Don't have an account?</span>
            <Link to="/signup">
              <span>Signup</span>
            </Link>
          </p>
          
          <div className="d-flex justify-content-center gap-2">
            <a
              href="#"
              className="btn btn-icon btn-lg rounded-pill btn-text-facebook waves-effect waves-light"
              onClick={(e) => e.preventDefault()}
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              href="#"
              className="btn btn-icon btn-lg rounded-pill btn-text-twitter waves-effect waves-light"
              onClick={(e) => e.preventDefault()}
            >
              <i className="bx bxl-twitter" />
            </a>
            <a
              href="#"
              className="btn btn-icon btn-lg rounded-pill btn-text-github waves-effect waves-light"
              onClick={(e) => e.preventDefault()}
            >
              <i className="bx bxl-instagram-alt" />
            </a>
            <a
              href="#"
              className="btn btn-icon btn-lg rounded-pill btn-text-google-plus waves-effect waves-light"
              onClick={(e) => e.preventDefault()}
            >
              <i className="bx bxl-linkedin-square" />
            </a>
          </div>
        </div>
      </div>
      {/* /Login */}
      <img
        src={tree3}
        alt="auth-tree"
        className="authentication-image-object-left d-none d-lg-block"
      />
      <img
        src={masklight}
        className="authentication-image d-none d-lg-block scaleX-n1-rtl"
        height={172}
        alt="triangle-bg"
        data-app-light-img="illustrations/auth-basic-mask-light.png"
        data-app-dark-img="illustrations/auth-basic-mask-dark.png"
      />
      <img
        src={tree}
        alt="auth-tree"
        className="authentication-image-object-right d-none d-lg-block"
      />
    </div>
  </div>
</div>

   
   </>

  )
}

export default Login