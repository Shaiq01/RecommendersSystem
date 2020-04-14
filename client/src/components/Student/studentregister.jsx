import React from "react";
import { studentregister } from "../API/UserAPI"
import logo from '../Images/logo.svg'
import Image from 'react-bootstrap/Image'


export default class StudentRegister extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            valid: false,
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    validate(e){
        const regex = /(^[0-9]{2}[B])-([0-9]{3})-([A-Z]{2})(@students.uit.edu)$/;
        const valid = regex.test(e.target.value);
        this.setState({valid});
      }
    onSubmit(e) {
        e.preventDefault()

        const StudentRegister = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        studentregister(StudentRegister);
      if (StudentRegister) {
        this.setState({ s: "Registeration Successful! Verification email has been sent" });

    }
        }
      
      
  render() {
  


    return (

      <div className="base-container" style = {{alignContent: 'center', margin : "17px"}} >
        <Image src={logo} roundedCircle width="70px" height="70px" />
        <div id="header">Student Registeration</div>
        <div className="content">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Full Name" value={this.state.name}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="University Email Address" value={this.state.email}
                onChange={this.onChange} className={this.state.valid ? "valid" : "invalid" } onChangeCapture={this.validate} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Type Password" value={this.state.password}
                onChange={this.onChange}/>
            </div>
            <div className="footer">
              <button type="submit" className="btn"> Register </button>
              <h6>{this.state.s}</h6>
          </div> 
          </form>
        </div>
      </div>
    );
  }
}