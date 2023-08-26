import React from "react";
import "./Content.css";

function Content({ selectedPlanet}) {
    const planets = [
        {
            id: 1,
            // src: require("./Navbar/images/3rdcard1.png"),
            title: "MERCURY",
            description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        },
        {
            id: 2,
            // src: require("./Navbar/images/3rdcard2.png"),
            title: "VENUS",
            description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        },
        {
            id: 3,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "EARTH",
            description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        },
        {
            id: 4,
            // src: require("./Navbar/images/3rdcard1.png"),
            title: "MARS",
            description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. ",
        },
        {
            id: 5,
            // src: require("./Navbar/images/3rdcard2.png"),
            title: "JUPITER",
            description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        },
        {
            id: 6,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "SATURN",
            description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        },
        {
            id: 7,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "URANUS",
            description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        },
        {
            id: 8,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "NEPTUNE",
            description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        },
    ];

    const defaultPlanet = planets.find(planet => planet.title === 'MERCURY');

    const selectedPlanetData = selectedPlanet ? planets.find(planet => planet.title === selectedPlanet) : defaultPlanet;
  
    return (
      <div className="content">
        <div className="planet-card">
          <h2>{selectedPlanetData.title}</h2>
          <p>{selectedPlanetData.description}</p>
        </div>
      </div>
    );
  }
  
  
    
    export default Content;