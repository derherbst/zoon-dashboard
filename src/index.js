import 'core-js/es/map';
import 'core-js/es/set';

import 'raf/polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import './static/styles/index.scss'

import App from './components/page'

import CarsService from './services/cars-service'
import { CarsServiceProvider } from './components/cars-service-context'

const carService = new CarsService();

ReactDOM.render(
    <CarsServiceProvider value={carService}>
        <App />
    </CarsServiceProvider>,
    document.getElementById('root')
);
