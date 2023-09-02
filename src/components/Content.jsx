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
import Guts from './images/Guts.svg';
import Guts1 from './images/Guts1.svg';
import Guts2 from './images/Guts2.svg';
import Guts3 from './images/Guts3.svg';
import Guts4 from './images/Guts4.svg';
import Guts5 from './images/Guts5.svg';
import Guts6 from './images/Guts6.svg';
import Guts7 from './images/Guts7.svg';
import MercuryGeology from './images/Mercury-Geology.svg';
import VenusGeology from './images/Venus-Geology.svg';
import EarthGeology from './images/Earth-Geology.svg';
import MarsGeology from './images/Mars-Geology.svg';
import JupiterGeology from './images/Jupiter-Geology.svg';
import SaturnGeology from './images/Saturn-Geology.svg';
import UranusGeology from './images/Uranus-Geology.svg';
import NeptuneGeology from './images/Neptune-Geology.svg';


function Content({ selectedPlanet }) {
    const [activeSection, setActiveSection] = useState("OVERVIEW");

    const planets = [
        {
            id: 1,
            title: "MERCURY",
            description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            imgSrc: MercuryImage,
            imgSrc1: Guts,
            imgSrc2: MercuryGeology,
            rotTime: "58.6 DAYS",
            revTime: "87.97 DAYS",
            radius: "2,439.7 KM",
            temperature: "430°C",
            description1: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            description2: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Mercury_(planet)"
        },
        {
            id: 2,
            title: "VENUS",
            description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            imgSrc: VenusImage,
            imgSrc1: Guts1,
            imgSrc2: VenusGeology,
            rotTime: "243 DAYS",
            revTime: "224.7 DAYS",
            radius: "6,051.8 KM",
            temperature: "471°C",
            description1: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            description2: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Venus"
        },
        {
            id: 3,
            title: "EARTH",
            description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            imgSrc: EarthImage,
            imgSrc1: Guts2,
            imgSrc2: EarthGeology,
            rotTime: "0.99 DAYS",
            revTime: "365.26 DAYS",
            radius: "6,371 KM",
            temperature: "16°C",
            description1: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            description2: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Earth"
        },
        {
            id: 4,
            title: "MARS",
            description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. ",
            imgSrc: MarsImage,
            imgSrc1: Guts3,
            imgSrc2: MarsGeology,
            rotTime: "1.03 DAYS",
            revTime: "1.88 YEARS",
            radius: "3,389.5 KM",
            temperature: "-28°C",
            description1: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            description2: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Mars"
        },
        {
            id: 5,
            title: "JUPITER",
            description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            imgSrc: JupiterImage,
            imgSrc1: Guts4,
            imgSrc2: JupiterGeology,
            rotTime: "9.93 HOURS",
            revTime: "11.86 YEARS",
            radius: "69,911 KM",
            temperature: "-108°C",
            description1: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            description2: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Jupiter"
        },
        {
            id: 6,
            title: "SATURN",
            description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            imgSrc: SaturnImage,
            imgSrc1: Guts5,
            imgSrc2: SaturnGeology,
            rotTime: "10.8 HOURS",
            revTime: "29.46 YEARS",
            radius: "58,232 KM",
            temperature: "-138°C",
            description1: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            description2: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Saturn"
        },
        {
            id: 7,
            title: "URANUS",
            description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            imgSrc: UranusImage,
            imgSrc1: Guts6,
            imgSrc2: UranusGeology,
            rotTime: "17.2 HOURS",
            revTime: "84 YEARS",
            radius: "25,362 KM",
            temperature: "-195°C",
            description1: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            description2: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Uranus"
        },
        {
            id: 8,
            title: "NEPTUNE",
            description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            imgSrc: NeptuneImage,
            imgSrc1: Guts7,
            imgSrc2: NeptuneGeology,
            rotTime: "16.08 HOURS",
            revTime: "164.79 YEARS",
            radius: "24,622 KM",
            temperature: "-201°C",
            description1: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            description2: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            wikipediaURL: "https://en.wikipedia.org/wiki/Neptune"
        },
    ];

    const defaultPlanet = planets.find(planet => planet.title === 'MERCURY');
    const selectedPlanetData = selectedPlanet ? planets.find(planet => planet.title === selectedPlanet) : defaultPlanet;
    return (
        <main>
            <div className="content" >
                <div className="for-responsive">
                    <ul>
                        <li onClick={() => setActiveSection("OVERVIEW")}>OVERVIEW</li>
                        <li onClick={() => setActiveSection("INTERNAL_STRUCTURE")}>INTERNAL</li>
                        <li onClick={() => setActiveSection("SURFACE_GEOLOGY")}>SURFACE</li>
                    </ul>
                </div>
                <div className="main-content">

                    <div className="content-img">
                        {activeSection === "OVERVIEW" && (
                            <img src={selectedPlanetData.imgSrc} alt={selectedPlanetData.title} />
                        )}
                        {activeSection === "INTERNAL_STRUCTURE" && (
                            <img src={selectedPlanetData.imgSrc1} alt={selectedPlanetData.title} />
                        )}
                        {activeSection === "SURFACE_GEOLOGY" && (
                            <div className="over-and-surface">

                                <img src={selectedPlanetData.imgSrc} alt={selectedPlanetData.title} />
                                <div className="geology-img">
                                    <img src={selectedPlanetData.imgSrc2} alt="" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="planet-card">
                        <div className="title-and-description">
                            <h2>{selectedPlanetData.title}</h2>
                            {activeSection === "OVERVIEW" && (
                                <p>{selectedPlanetData.description}</p>
                            )}
                            {activeSection === "INTERNAL_STRUCTURE" && (
                                <p>{selectedPlanetData.description1}</p>
                            )}
                            {activeSection === "SURFACE_GEOLOGY" && (
                                <p>{selectedPlanetData.description2}</p>
                            )}

                            <div className="source">
                                <p>
                                    Source: <a href={selectedPlanetData.wikipediaURL} target="_blank" rel="noopener noreferrer"> Wikipedia </a>
                                </p>
                            </div>
                        </div>

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
        </main>
    );
}



export default Content;