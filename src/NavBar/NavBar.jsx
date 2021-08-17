import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';
import logo from 'Images/site_logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksDOM: null
    }
  }

  componentDidMount() {
    this.setState({
      linksDOM: this.props.links.map((link) => (
        <li key={link.name}><Link to={link.route}>{link.name}</Link></li>
      ))
    });
  }

  render() {
    return (
      <div className={"nav-bar"}>
        <div className={"logo-container"}>
          <img className={"site-logo"} alt={"International Pencil Drawing Exhibition"} src={logo}/>
        </div>
        <div className={"links-container"}>
          <ul>
            {this.state.linksDOM}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
