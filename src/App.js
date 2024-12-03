import { HashRouter, Routes, Route } from 'react-router-dom';

import './assets/css/demo.css'
import './assets/css/core.css'
import './assets/css/theme-default.css'
import './assets/css/libs/@form-validation/form-validation.css'
import './assets/css/page-auth.css'
// import './assets/css/core-dark.css'
// import './assets/css/theme-bordered.css'
// import './assets/css/theme-default-dark.css'
// import './assets/css/theme-semi-dark.css'
import './assets/css/page-profile.css'



import Login from './components/Login';
import Signup from './components/Signup'
import AdminDashboard from './components/AdminDashboard'
import AdminUserListView from './components/AdminUserListView'
import CreateSubscription from './components/CreateSubscription'
import UpdateAdminProfile from './components/UpdateAdminProfile'
import SubscriptionListView from './components/SubscriptionListView'
import UpdateSubscription from './components/UpdateSubscription';
import ViewUser from './components/ViewUser';
import ViewSubscription from './components/ViewSubscription';
import UserDashboard from './components/UserDashboard';
import ViewProfile from './components/ViewProfile';
import UpdateProfile from './components/UpdateProfile';
import SubscriptionDetail from './components/SubscriptionDetail';
import UserSubscriptionListView from './components/UserSubscriptionListView';
import UserHistory from './components/UserHistory';

function App() {
  return (
    
  <>
  <HashRouter>
      
      <Routes>
        <Route exact path="/admindashboard"  element={<AdminDashboard />}    />
        <Route path="/subscriptionlistview"  element={<SubscriptionListView />}   />
        <Route path="/"  element={<Login />}  />
        <Route path="/signup"  element={<Signup />}   />
        <Route path="/createsubscription"   element={<CreateSubscription />}   />
        <Route path="/updateadminprofile"  element={<UpdateAdminProfile />}   />
         <Route path="/updatesubscription"  element={<UpdateSubscription />}   /> 
         <Route path="/adminuserlistview"  element={<AdminUserListView />}   /> 
         <Route path="/viewuser"  element={<ViewUser />}  />
         <Route path="/viewsubscription"  element={<ViewSubscription />}  />
         <Route path="/userdashboard"  element={<UserDashboard />}  />
         <Route path="/viewprofile"  element={<ViewProfile />}  />
         <Route path="/updateprofile"  element={<UpdateProfile />}  />
         <Route path="/subscriptiondetail"  element={<SubscriptionDetail />}  />
         <Route path="/usersubscriptionlistview"  element={<UserSubscriptionListView />}  />
         <Route path="/userhistory"  element={<UserHistory />}  />


         </Routes>
      
    </HashRouter>
  </>

  );
}

export default App;
