import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/materialize-css/dist/css/materialize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import materialize from 'materialize-css';

console.log(materialize);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
