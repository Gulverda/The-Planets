import React, { useState } from "react";
import "./Content.css";
import Link from './images/external-link-square-with-an-arrow-in-right-diagonal.svg';
import planets from "./Data";


function Content({ selectedPlanet }) {
    const [activeSection, setActiveSection] = useState("OVERVIEW");



    const defaultPlanet = planets.find(planet => planet.title === 'MERCURY');
    const selectedPlanetData = selectedPlanet ? planets.find(planet => planet.title === selectedPlanet) : defaultPlanet;
    
    return (
        <main>
            <div className="content" >
                <div className="for-responsive">
                    <ul>
                        <li onClick={() => setActiveSection("OVERVIEW")} className={activeSection === "OVERVIEW" ? "active" : ""}>OVERVIEW</li>
                        <li onClick={() => setActiveSection("INTERNAL_STRUCTURE")} className={activeSection === "INTERNAL_STRUCTURE" ? "active" : ""}>INTERNAL</li>
                        <li onClick={() => setActiveSection("SURFACE_GEOLOGY")} className={activeSection === "SURFACE_GEOLOGY" ? "active" : ""}>SURFACE</li>
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
                                    Source: <a href={selectedPlanetData.wikipediaURL} target="_blank" rel="noopener noreferrer"> Wikipedia <img src={Link} alt="" /> </a>
                                </p>
                            </div>
                        </div>

                        <div className="overview-istructure-sgeology">
                            <ul>
                                <li onClick={() => setActiveSection("OVERVIEW")} className={activeSection === "OVERVIEW" ? "active" : ""}><b>01</b> OVERVIEW</li>
                                <li onClick={() => setActiveSection("INTERNAL_STRUCTURE")} className={activeSection === "INTERNAL_STRUCTURE" ? "active" : ""}><b>02</b> INTERNAL STRUCTURE</li>
                                <li onClick={() => setActiveSection("SURFACE_GEOLOGY")} className={activeSection === "SURFACE_GEOLOGY" ? "active" : ""}><b>03</b> SURFACE GEOLOGY</li>
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