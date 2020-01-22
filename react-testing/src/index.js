import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Main title="Titulo da pagina" description="Aqui um breve resumo de test" />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
