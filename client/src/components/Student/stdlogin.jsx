import React from "react";
import logo from '../Images/logo.svg'
import Image from 'react-bootstrap/Image'
import '../scss/styles.scss'


export class SLogin extends React.Component {

  render() {
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
        <Image src={logo} roundedCircle width="70px" height="70px"/>
        <div id="header">STUDENT LOGIN</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <i className="fas fa-user fa-1x"></i><br /><br />
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <i className="fas fa-lock fa-1x"></i><br /><br />
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
           LOGIN
          </button>
        <div>
          <label className="label">forget password?</label>
            <a href="/xx">Reset Password</a>
        </div>
          <div>
            <label className="label"> Don't have an Account?</label>
            <a href="/xx">Create Account</a>
          </div>
        </div>
      </div>
    );
  }
}
