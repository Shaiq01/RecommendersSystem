import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from '../Images/logo.svg'
import '../scss/styles.scss'

export default class Logout extends React.Component {
    render() {
        return (
            <div className="container mx-auto m-5">
            <Card className="text-center">
                    <Card.Header className="text-lg"><span className="fas fa-sign-out-alt text-grey" >&nbsp;</span>LOG OUT
                   </Card.Header>
                <Card.Body>
                        <Image src={logo} roundedCircle width="60px" height="60px" />
                        <br/>
                    <Card.Text>
                        You are attempting to logout from Uni Perks
                    </Card.Text>
                    <Button className="btn btn-danger" variant="primary">Log Out</Button>
                </Card.Body>
                <Card.Footer className="text-muted"><span className="fas fa-copyright">&nbsp;</span>uniperks.com</Card.Footer>
            </Card>
            </div>
        );
    }
}

