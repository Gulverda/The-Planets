import React, { useState } from "react";
import "./Content.css";
import MercuryImage from './images/Mercury.png';
import VenusImage from './images/Venus.png';
import EarthImage from './images/Earth.png';
import MarsImage from './images/Mars.png';
import JupiterImage from './images/Jupiter.png';
import SaturnImage from './images/Saturn.png';
import UranusImage from './images/Uranus.png';
import NeptuneImage from './images/Neptune.png';

function Content({ selectedPlanet }) {
    const [activeSection, setActiveSection] = useState("OVERVIEW");

    const planets = [
        {
            id: 1,
            // src: require("./Navbar/images/3rdcard1.png"),
            title: "MERCURY",
            description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            imgSrc: MercuryImage,
            rotTime: "58.6 DAYS",
            revTime: "87.97 DAYS",
            radius: "2,439.7 KM",
            temperature: "430°C"
        },
        {
            id: 2,
            // src: require("./Navbar/images/3rdcard2.png"),
            title: "VENUS",
            description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            imgSrc: VenusImage,
            rotTime: "243 DAYS",
            revTime: "224.7 DAYS",
            radius: "6,051.8 KM",
            temperature: "471°C"
        },
        {
            id: 3,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "EARTH",
            description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            imgSrc: EarthImage,
            rotTime: "0.99 DAYS",
            revTime: "365.26 DAYS",
            radius: "6,371 KM",
            temperature: "16°C"
        },
        {
            id: 4,
            // src: require("./Navbar/images/3rdcard1.png"),
            title: "MARS",
            description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. ",
            imgSrc: MarsImage,
            rotTime: "1.03 DAYS",
            revTime: "1.88 YEARS",
            radius: "3,389.5 KM",
            temperature: "-28°C"
        },
        {
            id: 5,
            // src: require("./Navbar/images/3rdcard2.png"),
            title: "JUPITER",
            description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            imgSrc: JupiterImage,
            rotTime: "9.93 HOURS",
            revTime: "11.86 YEARS",
            radius: "69,911 KM",
            temperature: "-108°C"
        },
        {
            id: 6,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "SATURN",
            description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            imgSrc: SaturnImage,
            rotTime: "10.8 HOURS",
            revTime: "29.46 YEARS",
            radius: "58,232 KM",
            temperature: "-138°C"
        },
        {
            id: 7,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "URANUS",
            description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            imgSrc: UranusImage,
            rotTime: "17.2 HOURS",
            revTime: "84 YEARS",
            radius: "25,362 KM",
            temperature: "-195°C"
        },
        {
            id: 8,
            // src: require("./Navbar/images/3rdcard3.png"),
            title: "NEPTUNE",
            description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            imgSrc: NeptuneImage,
            rotTime: "16.08 HOURS",
            revTime: "164.79 YEARS",
            radius: "24,622 KM",
            temperature: "-201°C"
        },
    ];

    const defaultPlanet = planets.find(planet => planet.title === 'MERCURY');
    const selectedPlanetData = selectedPlanet ? planets.find(planet => planet.title === selectedPlanet) : defaultPlanet;

    return (
        <main>
            <div className="content">
                <div className="main-content">
                    <div className="content-img">
                        <img src={selectedPlanetData.imgSrc} alt={selectedPlanetData.title} />
                    </div>
                    <div className="planet-card">
                        <h2>{selectedPlanetData.title}</h2>
                        <p>{selectedPlanetData.description}</p>
                        <div className="overview-istructure-sgeology">
                            <ul>
                                <li onClick={() => setActiveSection("OVERVIEW")}><b>01</b> OVERVIEW</li>
                                <li onClick={() => setActiveSection("INTERNAL_STRUCTURE")}><b>02</b> INTERNAL STRUCTURE</li>
                                <li onClick={() => setActiveSection("SURFACE_GEOLOGY")}><b>03</b> SURFACE GEOLOGY</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* OVERVIEW-SECTION */}
            {activeSection === "OVERVIEW" && (
                <div className="information-section">
                    <div className="information">
                        <div id="info">
                            <p>ROTATION TIME</p>
                            <label htmlFor="information">{selectedPlanetData.rotTime}</label>
                        </div>
                        <div id="info">
                            <p>REVOLUTION TIME</p>
                            <label htmlFor="information">{selectedPlanetData.revTime}</label>
                        </div>
                        <div id="info">
                            <p>RADIUS</p>
                            <label htmlFor="information">{selectedPlanetData.radius}</label>
                        </div>
                        <div id="info">
                            <p>AVERAGE TEMP.</p>
                            <label htmlFor="information">{selectedPlanetData.temperature}</label>
                        </div>
                    </div>
                </div>
            )}

            {/* INTERNAL STRUCTURE-SECTION */}

            {/* SURFACE GEOLOGY-SECTION */}
        </main>
    );
}



export default Content;