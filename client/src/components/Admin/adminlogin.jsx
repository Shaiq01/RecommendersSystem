import React from 'react'
import logo from '../Images/logo.svg'
import Image from 'react-bootstrap/Image'
import { adminlogin, adminprofile } from '../API/UserAPI'
import { Redirect } from 'react-router-dom'
import toastr from 'reactjs-toastr'
import 'reactjs-toastr/lib/toast.css';


export default class Adminlogin extends React.Component {
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


        const admin = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.email && this.state.password) {

            adminlogin(admin)
            adminprofile().then(res => {
                let responseJSON = res
                if (responseJSON.user) {
                    sessionStorage.setItem('user', responseJSON);
                    this.setState({
                        redirect: true,
                    });

                }
                else {
                    toastr.error('Incorrect Email or Password', 'Validation Error', { timeOut: 1 })
                }


            })
        }
        else {
            toastr.error('Please Fill the Required fields', 'Input Error', { timeOut: 1 })

        }
    }
    render() {
        if (this.state.redirect) {
            return (

                <Redirect to="/admindashboard" />
            )
        }
        return (
            <div className="base-container m-5" >
                <Image src={logo} roundedCircle width="70px" height="70px" />
                <div id="header">ADMIN LOGIN</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <i className="fas fa-user fa-1x"></i><br /><br />
                            <input type="email" name="email" placeholder="Email Address" value={this.state.email}
                                onChange={this.onChange}
                                 />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-lock fa-1x" aria-hidden='true'></i><br /><br />
                            <input type="password" name="password" placeholder="Password" value={this.state.password}
                                onChange={this.onChange}
                                 />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn" onClick={this.onSubmit}>
                        LOGIN
          </button>
                </div>
                <div>
                    <label className="label"> forget password?</label>
                    <a href="/xx">Reset Password</a>
                </div> <br />
            </div>

        );
    }
}

