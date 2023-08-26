import React, { Component } from 'react';
import MenuItems from './Menuitems';
import './Navbar.css';
import './Button.css';
import Logo from './images/logo.svg';

class Navbar extends Component {
  state = {
    clicked: false,
    selectedPlanet: 'MERCURY' // Set the initial selected planet to 'MERCURY'
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  handlePlanetClick = (planetTitle) => {
    this.setState({ selectedPlanet: planetTitle });
    this.props.onSelectPlanet(planetTitle);
    this.setState({ clicked: false });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src={Logo} alt="logo" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => (
            <li key={item.title}>
              <button
                className={item.cName}
                onClick={() => this.handlePlanetClick(item.title)}
              >
                <img id='Round' src={item.imgSrc} alt="" /> {/* Add planet image */}
                {item.title}
                <svg className='Arrow' xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
