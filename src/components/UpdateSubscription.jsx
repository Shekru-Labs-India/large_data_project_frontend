import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const UpdateSubscription = () => {
  return (
    
    <>
    <Navbar/>

    

    <div className="container-xxl flex-grow-1 container-p-y">
   {/* Basic Layout */}
   
   {/* Multi Column with Form Separator */}
   <div className="card mb-6">
     <h5 className="card-header">Update Subscription</h5>
     <form className="card-body">
       
       <div className="row g-6">
         <div className="col-md-6">
           <div className="form-floating form-floating-outline">
             <input
               type="text"
               id="multicol-username"
               className="form-control"
               placeholder="Enter Name"
               style={{ textTransform: 'capitalize' }}
             />
             <label htmlFor="multicol-username">Name</label>
           </div>
         </div>
         <div className="col-md-6">
           <div className="input-group input-group-merge">
             <div className="form-floating form-floating-outline">
               <input
                 type="text"
                 id="multicol-email"
                 className="form-control"
                 placeholder="Enter Price"
                
                 
               />
               <label htmlFor="multicol-email">Price</label>
             </div>
             
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-password-toggle">
             <div className="input-group input-group-merge">
               <div className="form-floating form-floating-outline">
                 <textarea
                   type="text"
                   id="multicol-password"
                   className="form-control"
                   placeholder="Enter Description"
                   onInput={(e) => {
                    const value = e.target.value;
                    if (value) {
                      e.target.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                    }
                  }}
                 />
                 <label htmlFor="multicol-password">Description</label>
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
                   placeholder="Enter Validity"
                   
                 />
                 <label htmlFor="multicol-confirm-password">
                   Validity
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
                   type="date"
                   id="multicol-confirm-password"
                   className="form-control"
                   placeholder="Enter Start Date"
                   
                 />
                 <label htmlFor="multicol-confirm-password">
                   Start Date
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
                   type="date"
                   id="multicol-confirm-password"
                   className="form-control"
                   placeholder="Enter End Date"
                   
                 />
                 <label htmlFor="multicol-confirm-password">
                   End Date
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

export default UpdateSubscription