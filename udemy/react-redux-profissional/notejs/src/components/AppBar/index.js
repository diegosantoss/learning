import React from 'react';

const AppBar = () => (
  <section className="app-bar">
    <section className="container container_app-bar">
      <span className="app-bar__brand">Note.js</span>
      <button className="app-bar__action">
        <i className="material-icons">refresh</i>
      </button>
      <button className="app-bar__action">
        <i className="material-icons">save</i>
      </button>
    </section>
  </section>
);

export default AppBar;