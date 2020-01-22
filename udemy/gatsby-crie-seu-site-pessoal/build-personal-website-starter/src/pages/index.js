import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import photo from '../assets/images/diegosantoss.jpg';

const Home = () => (
  <Layout>
    <SEO 
      pageTitle="Diego Santos" 
      description="Front-End ReactJS Web Developer, developing apps and web applications"
      keywords="React, ReactJS, Gatsby, Front-End, developer, Front End, API"
    />
    <figure className="image is-128x128 photo">
      <img className="is-rounded" src={photo} alt="Diego Santos - Front End" />
    </figure>
    <h1 className="title has-text-centered">Diego Santos</h1>
    <p className="subtitle has-text-centered">Front-End ReactJS Web Developer</p>
    <div className="has-text-centered">
      <a target="_blank" href="https://github.com/diegosantoss">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/diegosantoss/">
        <span className="icon is-large fa-2x">
        <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </div>

    <section className="section content is-size-5-desktop is-size-5-touch">
      <h4 className="title">Hello, I am Diego Santos!</h4>
      <p> I've being working as Front-End Developer since 2015, creating web applications to connect people with the best solutions, and studying every day to be better than yesterday. </p>
      <p>At the moment, the almost all of my projects is using the base as javascript/react</p>
      <p>Check out my <Link to="/projects">Projects</Link></p>
    </section>
  </Layout>
);

export default Home;
