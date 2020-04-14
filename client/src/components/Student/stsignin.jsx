import React from "react";
import "../../App.scss";
import { SLogin} from './stdlogin'
import { Vlogin } from '../Vendor/vlogin'
import Navigation from "../Main/navbar";
import { Redirect } from 'react-router-dom'


export class Stsignin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      redirect:false
    };

  }


  componentDidMount() {
    this.rightSide.classList.add("right");
    if (sessionStorage.getItem('user')) {
      this.setState({ redirect: true });
    }
  }

  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");

    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));

  }



  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/vp" />
      )
    }
    const { isLogginActive } = this.state;
    const current = isLogginActive ? <h6>Click here to login as Vendor</h6> : <h6>Click here to login as Student</h6>;
    const currentActive = isLogginActive ? "stdlogin" : "vlogin";
    return (
      <div>
        <Navigation/>
      <div className="App">
        <div className="login">
          <div className="container " ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <SLogin containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Vlogin containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      </div>
    );

  }

}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};



