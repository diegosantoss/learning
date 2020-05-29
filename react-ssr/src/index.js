import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
if (root.hasChildNodes() === true) {
    ReactDOM.hydrate(<App />, root);
} else {
    ReactDOM.render(<App />, root);
}

serviceWorker.unregister();