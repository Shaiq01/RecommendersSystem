import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Main/home';
import { Stsignin } from './components/Student/stsignin';
//import { Vsignin } from './components/Vendor/vsignin';
import Panel from './components/Vendor/panel';
import Offer from './components/Vendor/offer';
import Vreport from './components/Vendor/vreport';
import Vp from './components/Vendor/vp';
import VendorLogin from './components/Vendor/vendorlogin';
import VendorRegister from './components/Vendor/vendorregister';
import LogVS from './components/Main/Logvs';
import Portal from './components/Student/portallog';
import Availoffer from './components/pages/aoffer';
import GetCode from './components/pages/getcode';
import Offertwo from './components/pages/offertwo';
import Adminlogin from './components/Admin/adminlogin'
import StudentRegister from './components/Student/studentregister'
import AdminDashboard from './components/Admin/admindashboard';
import ManageCategory from './components/Admin/managecategory';
import AdminOffer from './components/Admin/adminoffer';
import Fashion from './components/Categories/fashion';
import Logout from './components/Main/logout';



class App extends React.Component {
  render() {
    return (
      <Router>
      <Route path='/home' component={Home}></Route>
      <Route path='/stsignin' component={Stsignin}></Route>
        <Route path='/panel' component={Panel}></Route>
        <Route path='/offer' component={Offer}></Route>
        <Route path='/vreport' component={Vreport}></Route>
        <Route path='/vp' component={Vp}></Route>
        <Route path='/vendorlogin' component={VendorLogin}></Route>
        <Route path='/vendorregister' component={VendorRegister}></Route>
        <Route path='/Logvs' component={LogVS}></Route>
        <Route path='/portallog' component={Portal}></Route>
        <Route path='/aoffer' component={Availoffer}></Route>
        <Route path='/getcode' component={GetCode}></Route>
        <Route path='/offertwo' component={Offertwo}></Route>
        <Route path='/adminlogin' component={Adminlogin}></Route>
        <Route path="/studentregister" component={StudentRegister}></Route>
        <Route path="/admindashboard" component={AdminDashboard}></Route>
        <Route path="/managecategory" component={ManageCategory}></Route>
        <Route path="/adminoffer" component={AdminOffer}></Route>
        <Route path="/fashion" component={Fashion}></Route>
        <Route path="/logout" component={Logout}></Route>
      </Router>
    );
  }
}

export default App;