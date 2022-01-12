import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        {/* <div className="profile-img my-5"> */}
        {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        {/* </div> */}
        <h3>What is EcoDataStats?</h3>
        <p>
        EcoDataStats is a data-driven decision-making portal for the waste management industry. Our reports pull from more than 20 years of publicly available RCRA and other EPA.gov datasets to assist companies with information on generators, transporters, receivers and processors of various types of waste. With our easy-to-use interface, you can select an industry or manufacturing ouput stream and track metrics from its origin to waste disposal.
EcoDataStats provides key metrics for decision-makers to help identify the most efficient ways to move generated waste.
        </p>
        <h3>Who are we?</h3>
        <p>
        We are a team of sustainability professionals, each with a unique background and area of expertise:
        </p>
        <h4>First Last</h4>
        <h5>Title</h5>
        <p>Bio </p> 
        <h4>First Last</h4>
        <h5>Title</h5>
        <p>Bio </p> 
        <h4>First Last</h4>
        <h5>Title</h5>
        <p>Bio </p> 
      </div>
    </section>
  );
}

export default About;