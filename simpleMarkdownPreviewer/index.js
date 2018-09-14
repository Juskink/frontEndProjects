import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// below the App class is imported from the file app.js which is a local file.
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
