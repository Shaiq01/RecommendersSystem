import React from 'react'
import { vendorlogin } from '../API/UserAPI'
import { Redirect } from 'react-router-dom'
//import Vp from './vp'



export default class VendorLogin extends React.Component {
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
        vendorlogin(vendor);
        setTimeout(5000);        
        if(localStorage.getItem('usertoken')){
            setTimeout(10000);
            this.setState({redirect:true});
        }
        else{
            window.alert('Invalid Username or Password');
        }
    }

    render() {
        if(this.state.redirect)
        {
            return(
                <Redirect to="/vp" />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please sign in
                            </h1>
                            <div className="form-group">
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
                            <button
                                type="submit"
                                className="button"
                                onClick={this.onSubmit}
                            >SIGNIN</button>
                    </div>
                </div>
            </div>
        )
    }
}