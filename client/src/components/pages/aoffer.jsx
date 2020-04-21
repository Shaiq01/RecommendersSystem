import React from 'react'
import Image from 'react-bootstrap/Image'
import banner from '../Images/banner.jpg'
import Container from 'react-bootstrap/Container'
import '../scss/styles.scss'
import Navigation from '../Main/navbar'
import Tabs from '../Main/tabs'
import { Button as Rbtn } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { CardDeck } from 'react-bootstrap'
import { Link } from '@material-ui/core'
import { getRecommendedOffers } from '../API/OfferAPI'
import { getRecommendedOffersByOffer } from '../API/OfferAPI'


export default class Availoffer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recommended: [],
        }
    }

    componentDidMount(){
        getRecommendedOffers(6).then(data => {
            this.setState(
                {
                    recommended: [...data]
                }
            )
        });
        let data = sessionStorage.getItem('user')
        console.log(data)
    }
   
    render() {
        return (
            <div>
                <Navigation/>
                <Tabs/> 
                
                <Container className="grid-container">
                <div className="box-1">
                    <Image className="banner" src={banner} fluid /> 
               <h1>15% Student Discount</h1>
               <h6>All Stock</h6>
               <br></br>
                    <Rbtn tton variant="primary" size="lg">
                        GET CODE AND OPEN WEBSITE
                    </Rbtn>
               <br/>
               <br />
                    </div>
                    <div>
                        <br/><br/>
                        <h2>About this Student Discount</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <h1>{this.props.value}</h1>
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
                          <br/>

                    </div>
                    

                </Container>
                <br/>
                <h1>Related Offers</h1>
                <br/>
                <CardDeck className="container" id="r-offers">
                    {this.state.recommended.map(recommended => ( 
                    <Card style={{ width: '18rem' }} key={recommended.offerid}>
                    <Card.Img variant="top" src={banner} />
                    <Card.Body>
                        <Card.Title>{recommended.offertitle}</Card.Title>
                        <Rbtn variant="primary">Go somewhere</Rbtn>
                    </Card.Body>
                    </Card>
                    ))}
                </CardDeck>
            </div>
           
        )
    }
}