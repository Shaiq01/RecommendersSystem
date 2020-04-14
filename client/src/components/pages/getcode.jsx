import React from 'react'
import Image from 'react-bootstrap/Image'
import banner from '../Images/banner.jpg'
import Container from 'react-bootstrap/Container'
import '../scss/styles.scss'
import Navigation from '../Main/navbar'
import Tabs from '../Main/tabs'
import {Button as Rbtn} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { CardDeck } from 'react-bootstrap'
import { Link } from '@material-ui/core'




export default class Getcode extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Tabs />

                <Container className="grid-container">
                    <div className="box-1">
                        <Image className="banner" src={banner} fluid />
                        <h1>15% Student Discount</h1>
                        <h6>All Stock</h6>
                        <p>Copy code and enter on the ABC Website</p>
                        <br></br>
                      <div className = "dotted">ABZ!@#GHTY</div>
                      <br/>
                        <div className="solid">This is a single use code. You will need a new code if you've already used the above one code.<br/> Your next code 
                        will be avaliable in 59 minutes 59 seconds</div>
                        <br />
                        <br />
                        <Rbtn variant="primary" size="lg">
                            Re-open Website
    </Rbtn>
    <br/>
                    </div>
                    <div>
                        <br /><br />
                        <h2>About this Student Discount</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle className="a-btn" as={Link} variant="link" eventKey="0">
                                        See Terms and Condition
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <br />

                    </div>


                </Container>
                <br />
                <h1>Related Offers</h1>
                <br />
                <CardDeck className="container" id="r-offers">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={banner} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Rbtn variant="primary">Go somewhere</Rbtn>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={banner} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Rbtn variant="primary">Go somewhere</Rbtn>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={banner} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Rbtn className="af-btn" variant="primary">Go somewhere</Rbtn>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>

        )
    }
}
