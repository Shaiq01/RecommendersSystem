import React from "react";
import { vendorregister } from "../API/UserAPI"
import { Redirect } from "react-router";
import logo from '../Images/logo.svg'
import Image from 'react-bootstrap/Image'
import Navigation from "../Main/navbar";

export class VendorRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            websiteurl:'',
            s:'',
            errors: {},
            redirect:false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const VendorRegister = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            websiteurl: this.state.websiteurl
        }
        if(this.state.name && this.state.password && this.state.email && this.state.websiteurl)
        {
        vendorregister(VendorRegister);
        if(VendorRegister){
            this.setState({s:"Registeration Successful"});
            setTimeout(10000);
            this.setState({redirect:true})
        }
    }
    else
    {
            window.alert('Please fill the required fields')
    }
    }


    render() {
        if(this.state.redirect){
            return(
            <Redirect to="/stsignin"/>
            )
        }


        return (
            <div>
                <Navigation/>
            <div className="base-container mt-5">
                
            <div className="container mx-auto">
                <div className="base-container">
                    <Image src={logo} roundedCircle width="70px" height="70px" />
                </div>
                <div className="row">
                    <div className="col-md-6 mt-4 mx-auto">
                        <div>
                            <h1 className="h3 mb-3 font-weight-normal text-center">
                                Vendor Registeration
                            </h1>
                            <div className="form-group ">
                                        <span className="fas fa-user fa-1x "></span> &ensp;
                                <label htmlFor="name">Brand Name</label>       
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter your Brand Name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                        
                            </div>
                            <div className="form-group">
                                        <span className="fas fa-envelope fa-1x "></span> &ensp;
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                        <span className="fas fa-lock fa-1x "></span> &ensp;
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                        <span className="fas fa-link fa-1x "></span> &ensp;
                                <label htmlFor="websiteurl">Website Link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="websiteurl"
                                    placeholder="Enter Your Website Link"
                                    value={this.state.websiteurl}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                onClick={this.onSubmit}
                            >
                                Register
                            </button>
                            <h5>{this.state.s}</h5>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <label className="label">Already have an Account?</label>
                    <a href="/stsignin">Log In</a>
                </div>
            </div>
            </div>
        );
    }
}
export default VendorRegister;