import React from "react";
import AdminPanel from './sidebar/index'
import {Jumbotron,Button} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from '../Images/logo.svg'

export default class AdminDashboard extends React.Component {
    render() {
        return (
            <div>
            <AdminPanel/>
                <div className="container text-center" style={{ marginTop: 100 }}>
                    <Jumbotron>
                        <Image src={logo} roundedCircle width="70px" height="70px" />
                        <h1>Hello Admin!</h1>
                        <p>
                            This is Admin Dashboard, here you can find all options related to website functionality and features.
  </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
            </div>
            </div>
        );
    }
}
