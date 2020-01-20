import React, { Component } from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson}) => (
  <div>
    <strong>Modulo {activeModule.title}</strong>
    <br />
    <span>Aula {activeLesson.title}</span>
  </div>  
);

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);