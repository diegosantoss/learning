import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Olá Mundo
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));