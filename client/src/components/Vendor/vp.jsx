import React from 'react'
import { vendorprofile } from '../API/UserAPI'
import Pane from './sidebar/index'
import { Redirect } from 'react-router-dom'

export default class Vp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            weblink:'',
            redirect: false,
            isLoaded : false
        }
    }

 componentDidMount(){
        if(sessionStorage.getItem('user'))
        {
           vendorprofile().then(res => {
                this.setState({
                    name: res.user.name,
                    email: res.user.email,
                    weblink: res.user.websiteurl,
                    isLoaded:true
                })
            })
                  
        }
        else{
            this.setState({ redirect: true });
        }
}

onClick(e){
    e.preventDefault()
    sessionStorage.setItem('user','')
    sessionStorage.clear()
    this.setState({ redirect: true });

}


    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/stsignin" />
            )
        }
        if (!this.state.isLoaded) {
            return <div className="loader-container" ><div className="loader"></div></div>
        }
        else{
        return (
            <div>
            <Pane/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                            <tr>                                  
                                    <td><i className="fas fa-user fa-1x mr-3" /> Name</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                    <td><i className="fas fa-envelope fa-1x mr-3" />Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                                <tr>
                                    <td><i className="fas fa-link fa-1x mr-3" />Website URL</td>
                                    <td>{this.state.weblink}</td>
                                </tr>                            
                        </tbody>
                    </table>
                    <br/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClick.bind(this)} name="Logout"> Logout</button>
                </div>
            </div>
            </div>
        )
        }
    }
}
