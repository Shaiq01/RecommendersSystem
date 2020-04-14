import React from 'react'
import Navigation from './navbar'
import Tabs from './tabs'
import '../scss/styles.scss'
export default class LogVS extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Tabs/>
                <div className="container">
                <button id="vendor">VENDOR</button>
                <button id="student">STUDENT</button>
                </div>
            </div>
        );
    }
}

