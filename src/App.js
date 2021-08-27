import React from 'react';
import {Redirect} from "react-router";
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import NavBar from "./NavBar/NavBar";
import Home from "./Home/index";
import About from "./About/index";
import Kids from "./Kids/index";
import Youth from "./Youth/index";
import Professional from "./Professional/index";
import Hobby from "./Hobby/index";
import Founder from "./Founder/index";
import Other from "./Other/index";
import Footer from "./Shared/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      {"name": "Home", "route": "/", "component": Home},
      {"name": "About", "route": "/about", "component": About},
      {"name": "Kids", "route": "/kids", "component": Kids},
      {"name": "Youth", "route": "/youth", "component": Youth},
      // {"name": "Professional", "route": "/professional", "component": Professional},
      {"name": "Hobbyist", "route": "/hobby", "component": Hobby},
      {"name": "Founder", "route": "/founder", "component": Founder},
      // {"name": "Other", "route": "/other", "component": Other}
    ];
    this.state = {
      screenWidth: 0
    };
  }

  componentDidMount() {
    // resize website to fit smaller screens
    let screenWidth = window.screen.width;
    let viewportMetaTag = document.getElementById("viewport");
    if (screenWidth < 800) {
      let zoomRatio = screenWidth / 800;
      viewportMetaTag.setAttribute("content", "initial-scale=" + zoomRatio + ", maximum-scale=" +
        zoomRatio + ", minimum-scale=" + zoomRatio + ", width=" + screenWidth);
    } else {
      viewportMetaTag.setAttribute("content", "width=device-width, initial-scale=1");
    }
    this.setState({
      screenWidth: screenWidth
    });
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <HashRouter basename="/">
            <NavBar links={this.links}/>
            <div className="content-body">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/kids">
                  <Kids />
                </Route>
                <Route path="/youth">
                  <Youth />
                </Route>
                <Route path="/professional">
                  <Professional />
                </Route>
                <Route path="/hobby">
                  <Hobby />
                </Route>
                <Route path="/founder">
                  <Founder />
                </Route>
                <Route path="/other">
                  <Other />
                </Route>
              </Switch>
            </div>
          </HashRouter>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
