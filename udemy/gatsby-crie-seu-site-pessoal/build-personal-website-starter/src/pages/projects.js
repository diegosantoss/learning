import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Projects = () => (
  <Layout>
    <SEO 
      pageTitle="Projects" 
      description="Front-End ReactJS Web Developer, developing apps and web applications"
      keywords="React, ReactJS, Gatsby, Front-End, developer, Front End, API"  
    />
    <section className="section is-size-5-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Projects</h1>
      <hr />      
      <p className="has-text-centered">Some of my projects, see more on my <a href="https://github.com/diegosantoss">Github</a></p>

      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <h4 className="title is-size-5-desktop is-size-5-touch">John Smith</h4>
                  <p className="subtitle is-size-6-desktop is-size-6-touch">@johnsmith</p>
                  <div className="tags">
                    <span className="tag">Gatsby</span>
                    <span className="tag">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <ul className="has-text-centered">
        <li>Gatsby course</li>
        <li>Kassel Labs</li>
        <li>Tic=tac-porg</li>
      </ul>
    </section>

  </Layout>
);

export default Projects;