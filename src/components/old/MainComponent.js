import React, { Component } from 'react'
import SplashModal from './SplashModal'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentModal: "splash"
    };
  }
  render() {
    switch (this.state.currentModal) {
      case "splash":
        return <SplashModal />
      default:
        return <Menu />
    }
  }
}

export default MainComponent;