import React from 'react'
import Header from './Header'
import Footer from './Footer'

const UserHistory = () => {
  return (
    
   <>
   <Header/>

   <div className="container-xxl flex-grow-1 container-p-y">
  {/* Basic Bootstrap Table */}
  <div className="card">
    <h5 className="card-header">History</h5>
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr>
            <th>Total Records</th>
            <th>Download Records</th>
            <th>Remaining Records</th>
            
            
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
          <tr>
            <td>
             
              <span>20</span>
            </td>
            <td>10</td>
            <td>
             10
            </td>
            
            
          </tr>
          <tr>
            <td>
              
              <span>20</span>
            </td>
            <td>8</td>
            <td>
              12
            </td>
            
            
          </tr>

          
          
        </tbody>
      </table>
    </div>
  </div>
  {/*/ Basic Bootstrap Table */}
  
  
  
  
 
  
  
 
  
  
  
  
  
</div>

  <Footer/>
   </>

  )
}

export default UserHistory