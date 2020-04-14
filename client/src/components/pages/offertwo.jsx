import React from 'react'
import {Form,Col,Button} from 'react-bootstrap'


class Offertwo extends React.Component {
    render() {
        return (
            < div class = "container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h1>Offers</h1>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridtext">
                        <Form.Label>Offer Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter offer title" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridtext">
                        <Form.Label>Offer Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter offer description" />
                    </Form.Group>
                </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridtext">
                            <Form.Label>File input</Form.Label>
                            <Form.Control type="file"  />
                        </Form.Group>
                    </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridtext">
                        <Form.Label>Terms and Conditions</Form.Label>
                        <Form.Control type="text" placeholder="Enter terms and conditions" />
                    </Form.Group>
                </Form.Row>
                <Form.Row> 
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Offer count</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category type</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>


                </Form.Row>

                <Button variant="primary" type="submit">
                    Add Offer
  </Button>
            </Form>
            
            </div>
                </div>
            </div>

        );
    }
}

export default Offertwo;