import React from 'react'
import { Nav } from 'react-bootstrap'
import { getList } from '../API/CategoryAPI'

export default class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }


    }

    componentDidMount() {
        getList().then(data => {
            this.setState(
                {
                    categories: [...data]
                }
            )
        });
    }
    render() {
        return (
            <Nav justify variant="tabs">
                {this.state.categories.map(categories => ( 
                    <Nav.Item key={categories.catid}>
                        <Nav.Link href={"/" + categories.categoryname.toLowerCase()}>{categories.categoryname}</Nav.Link>
                </Nav.Item>
                ))}
            </Nav>
        );
    }
}

