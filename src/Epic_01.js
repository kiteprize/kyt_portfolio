import React, {Component, useEffect } from 'react';
import ReactTextTransition from "react-text-transition";
import {BrowserView, MobileView} from 'react-device-detect'
import './Epic_01.css';

const texts = ["제네럴리스트가 되려하는","기획과 디자인을 동시에 배우고 있는 ","신입 디자이너의 길을 걷고 있는"];

class IntroduceLine extends Component{
    state = {
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
        customIndex: 0
    };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
            textFastIndex: this.state.textFastIndex + 1
            });
        }, 3000);
    }    

    render(){
        return(
            <React.Fragment>
                <ReactTextTransition direction="up" style={{justifyContent : "center", alignItems : "center"}} inline>
                    {texts[this.state.textFastIndex % texts.length]}
                </ReactTextTransition>
            </React.Fragment>
        );
    }
}

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
  });
  return (
    <div className="App">
      <BrowserView>
        <div className="App-header">
          <IntroduceLine/>
            <div className="Underline"></div>
          디자이너 김용태 입니다.
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-App-header">
          <IntroduceLine/>
            <div className="Underline"></div>
          디자이너 김용태 입니다.
        </div>
      </MobileView>
    </div>
  );
}

export default App;
