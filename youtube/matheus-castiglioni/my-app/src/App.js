import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Header from './componentes/Header';
import Main from './componentes/Main';
import Tarefas from './componentes/Tarefas';
import NovaTarefa from './componentes/Tarefas/NovaTarefa';

function App() {
  return (
    <Provider store={store}>
      <Router> 
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/tarefas" component={Tarefas} />
          <Route path="/tarefas" component={Tarefas} />
          <Route path="/adicionar-tarefa" component={NovaTarefa} />
          <Route path="*" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
