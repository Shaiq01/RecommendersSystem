import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner from '../Images/banner.jpg'
import {CardDeck} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import offer from '../Images/offer.svg'
import Button from 'react-bootstrap/Button'
import Navigation from './navbar'
import Tabs from './tabs'
import {getList} from '../API/OfferAPI'
import { Redirect } from 'react-router'
//import Availoffer from '../pages/aoffer'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offers : [],
            isLoaded : false,
            redirect : false
        }


    }
    componentDidMount(){
        getList().then(data => {
            this.setState(
                {
                   isLoaded : true,
                    offers: [...data]
                },
                () => {
                    console.log(this.state.offers)
                }
            )
        });
    }
  onClick(){
      this.setState({redirect:true});
  }

    render() {
        if(this.state.redirect){
            return <Redirect to="/aoffer"/>
        }


        if(!this.state.isLoaded){
            return <div className="loader-container" ><div className="loader"></div></div>
        }
        else{
        return (
            <div>
                <Navigation/>
                <Tabs />
            <div className="container">

                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt=""
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt=""
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
                <h1>OFFERS</h1>
                <div className="container-fluid">
                
                        <CardDeck className="row">
                            {this.state.offers.map(of => (
                                <Card key={of.offerid}  className="col-sm-6" onClick={this.onClick.bind(this)}>
                        <Card.Img variant="top" src={offer}/>
                        <Card.Body>
                            <Card.Title value={of.offerid}>{of.offertitle}</Card.Title>

                        </Card.Body>
                                <Button    variant="primary">GET OFFER</Button>
                              
                    </Card>
                            ))}
                        </CardDeck>
                       
                    </div>
                   
            </div>
            </div>
        
        );
        }
    }
}
