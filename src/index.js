//Imports from library React Created when created application boilerplate
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Imports from my application folder files created by me
import './index.css';
import Router from './Router';


//This is where all application loads in index.html on (<div id="root"></div>)
ReactDOM.render(<Router/>, document.getElementById('root'));

//This is an API to help show some components to users with slow internet or not internet 
registerServiceWorker();
