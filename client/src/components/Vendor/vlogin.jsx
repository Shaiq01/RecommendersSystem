import React from "react";
import logo from '../Images/logo.svg'
import Image from 'react-bootstrap/Image'
import { vendorlogin,vendorprofile } from '../API/UserAPI'
import { Redirect } from 'react-router-dom'
import toastr from 'toastr'
import 'reactjs-toastr/lib/toast.css';



export class Vlogin extends React.Component {

  responseJSON;
  
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }



  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()


    
    const vendor = {
      email: this.state.email,
      password: this.state.password
    }
    if(this.state.email && this.state.password)
    {
      
      vendorlogin(vendor)
      vendorprofile().then(res => {
        let responseJSON = res
        if (responseJSON.user)
        {
          sessionStorage.setItem('user',responseJSON);
          this.setState({ 
            redirect: true, 
        });

        }
        else
        {
          toastr.error('Incorrect Email or Password', 'Validation Error', { timeOut: 2000 })
        }
      
    
      })
    }
    else
    {
      toastr.error('Please Fill the Required fields', 'Input Error', { timeOut: 2000 })
      
    }
    

    /*if(this.state.email && this.state.password)
    {
        if (localStorage.getItem('usertoken')) {
          sessionStorage.setItem('usertoken');
          this.setState({ redirect: true });
    }
      else {
        window.alert('Invalid Username or Password');
    }

  }*/
  
  }

  render() {
    if (this.state.redirect) {
      return (
        
        <Redirect to="/vp" />
      )
    }



    return (

      <div className="base-container" ref={this.props.containerRef}>
        <Image src={logo} roundedCircle width="70px" height="70px"/>
        <div id="header">VENDOR LOGIN</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <i className="fas fa-user fa-1x"></i><br/><br/>
              <input type="email" name="email" placeholder="Email Address" value={this.state.email}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <i className="fas fa-lock fa-1x" aria-hidden='true'></i><br/><br/>
              <input type="password" name="password" placeholder="Password" value={this.state.password}
                onChange={this.onChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn btn-block" onClick={this.onSubmit}>
            LOGIN
          </button>
        </div>
            <div>
                <label className="label"> forget password?</label>
                <a href="/xx">Reset Password</a>
            </div> <br/>
        <div>
          <label className="label"> Don't have an Account?</label>
          <a href="/vendorregister">Create Account</a>
        </div>
            
      </div>
    
    )
    
  }
}
