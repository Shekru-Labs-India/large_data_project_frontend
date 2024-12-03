import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const UpdateAdminProfile = () => {
  return (
    
    <>
    <Navbar/>

    <div className="container-xxl flex-grow-1 container-p-y">
   {/* Basic Layout */}
   
   {/* Multi Column with Form Separator */}
   <div className="card mb-6">
     <h5 className="card-header">Update Profile</h5>
     <form className="card-body">
       
       <div className="row g-6">
         <div className="col-md-6">
           <div className="form-floating form-floating-outline">
             <input
               type="text"
               id="multicol-username"
               className="form-control"
               placeholder="Enter Name"
             />
             <label htmlFor="multicol-username">Name</label>
           </div>
         </div>
         <div className="col-md-6">
           <div className="input-group input-group-merge">
             <div className="form-floating form-floating-outline">
               <input
                 type="email"
                 id="multicol-email"
                 className="form-control"
                 placeholder="Enter Email"
                
                 aria-describedby="multicol-email2"
               />
               <label htmlFor="multicol-email">Email</label>
             </div>
             <span className="input-group-text" id="multicol-email2">
               @example.com
             </span>
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-password-toggle">
             <div className="input-group input-group-merge">
               <div className="form-floating form-floating-outline">
                 <input
                   type="text"
                   id="multicol-password"
                   className="form-control"
                   placeholder="Enter Mobile Number"
                   
                 />
                 <label htmlFor="multicol-password">Mobile</label>
               </div>
               <span
                 className="input-group-text cursor-pointer"
                 id="multicol-password2"
               >
                 
               </span>
             </div>
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-password-toggle">
             <div className="input-group input-group-merge">
               <div className="form-floating form-floating-outline">
                 <input
                   type="text"
                   id="multicol-confirm-password"
                   className="form-control"
                   placeholder="Enter Profession"
                   
                 />
                 <label htmlFor="multicol-confirm-password">
                   Profession
                 </label>
               </div>
               <span
                 className="input-group-text cursor-pointer"
                 id="multicol-confirm-password2"
               >
               
               </span>
             </div>
           </div>
         </div>
 
         <div className="col-md-6">
           <div className="form-password-toggle">
             <div className="input-group input-group-merge">
               <div className="form-floating form-floating-outline">
                 <input
                   type="text"
                   id="multicol-confirm-password"
                   className="form-control"
                   placeholder="Enter City"
                   aria-describedby="multicol-confirm-password2"
                 />
                 <label htmlFor="multicol-confirm-password">
                   City
                 </label>
               </div>
               <span
                 className="input-group-text cursor-pointer"
                 id="multicol-confirm-password2"
               >
                 
               </span>
             </div>
           </div>
         </div>
 
       </div>
       <hr className="my-6 mx-n4" />
       
       <div className="pt-6">
         <button
           type="submit"
           className="btn btn-primary me-4 waves-effect waves-light"
         >
           Update
         </button>
         <button type="reset" className="btn btn-outline-secondary waves-effect">
           Cancel
         </button>
       </div>
     </form>
   </div>
   
   
   
 </div>
 
 <Footer/>
    </>

  )
}

export default UpdateAdminProfile