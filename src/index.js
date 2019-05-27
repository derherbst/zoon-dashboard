import 'core-js/es/map';
import 'core-js/es/set';

import 'raf/polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import './static/styles/index.scss'

import Main from './components/main'

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
