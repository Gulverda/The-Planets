import React, { Component } from 'react';
import MenuItems from './Menuitems';
import './Navbar.css';
import './Button.css';
import Logo from './images/logo.svg';

class Navbar extends Component {
  state = {
    clicked: false,
    selectedPlanet: 'MERCURY',
    activePlanet: 'MERCURY',
  };

  componentDidMount() {
    // Set the initial custom properties for styling
    this.updateCustomProperties('MERCURY');
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  handlePlanetClick = (planetTitle) => {
    this.setState({ selectedPlanet: planetTitle });

    // Update the custom property values for nav-link color and planet-bordered-color
    this.updateCustomProperties(planetTitle);

    // Set the active planet to the newly selected planet
    this.setState({ activePlanet: planetTitle });

    this.props.onSelectPlanet(planetTitle);
    this.setState({ clicked: false });
  }

  updateCustomProperties = (planetTitle) => {
    // Find the selected planet in the MenuItems array
    const selectedPlanet = MenuItems.find((item) => item.title === planetTitle);

    if (selectedPlanet) {
      // Update the custom property value for nav-link color
      document.documentElement.style.setProperty("--nav-link-color", selectedPlanet.color);

      // Update the custom property value for planet-bordered-color
      document.documentElement.style.setProperty("--planet-bordered-color", selectedPlanet.color);
    }
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src={Logo} alt="logo" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={`fas fa-bars ${this.state.clicked ? 'active' : ''}`} style={{ color: this.state.clicked ? 'rgba(255,255,255, 0.2)' : 'white' }}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item) => (
            <li key={item.title}>
              <button
                className={`nav-link ${item.cName} ${this.state.activePlanet === item.title ? 'active' : ''}`}
                onClick={() => this.handlePlanetClick(item.title)}
              >
                <img id='Round' src={item.imgSrc} alt="" />
                {item.title}
                <svg className='Arrow' xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
                </svg>
              </button>
              <span className={this.state.activePlanet === item.title ? 'active-planet' : ''}></span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
