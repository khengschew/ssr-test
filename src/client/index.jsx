import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/components/app';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.hydrate(<App />, document.getElementById('app'));
