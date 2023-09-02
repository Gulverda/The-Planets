import React, { Component } from 'react';
import MenuItems from './Menuitems';
import './Navbar.css';
import './Button.css';
import Logo from './images/logo.svg';

const planetBorderColors = {
        MERCURY: "#419EBB",
        VENUS: "#EDA249",
        EARTH: "#6D2ED5",
        MARS: "#D14C32",
        JUPITER: "#D83A34",
        SATURN: "#CD5120",
        URANUS: "#1EC1A2",
        NEPTUNE: "#2D68F0",
    };



    class Navbar extends Component {
      state = {
        clicked: false,
        selectedPlanet: 'MERCURY', // Set the initial selected planet to 'MERCURY'
        activePlanet: 'MERCURY',  // Store the currently active planet
      };
    
      handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
      }
    
      handlePlanetClick = (planetTitle) => {
        this.setState({ selectedPlanet: planetTitle });
    
        // Update the custom property value when a planet is selected
        document.documentElement.style.setProperty("--planet-bordered-color", planetBorderColors[planetTitle]);
    
        // Set the active planet to the newly selected planet
        this.setState({ activePlanet: planetTitle });
    
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
                  {/* Add a className for the active planet */}
                  <span className={this.state.activePlanet === item.title ? 'active-planet' : ''}></span>
                </li>
              ))}
            </ul>
          </nav>
        );
      }
    }
    
    export default Navbar;