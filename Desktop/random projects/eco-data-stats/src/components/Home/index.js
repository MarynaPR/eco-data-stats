import React from 'react';
import "./index.css";

function Home() {
    return (
       <section id="industries">
        <h1>Select your industry of interest:</h1>
            <div className="industry">
                <div>
                    <p>Agribusiness</p>
                </div>
                <nav>
                    <ul>
                        <li>Agriculture</li>
                        <li>Beverage</li>
                        <li>Food</li>
                        <li>Seafood</li>
                        <li>Tobacco</li>
                        <li>Wood</li>
                    </ul>
                </nav>
            </div>
            <div className="industry">
                <div>
                    <p>Construction & Real Estate</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>Consumer Goods & Retail</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>Heavy Industry</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>Manufacturing</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>ICT & Media</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>Pharmaceutical & Healthcare</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>Services</p>
                </div>
                <nav></nav>
            </div>
            <div className="industry">
                <div>
                    <p>Financial Services</p>
                </div>
                <nav></nav>
            </div>
       </section>
    );
}

export default Home;

