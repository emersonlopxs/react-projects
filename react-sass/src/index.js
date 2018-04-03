import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

// render to the App dom
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
