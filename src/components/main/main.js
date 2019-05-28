import React from 'react'

import { PlatformsServiceProvider } from '../platforms-service-context'

import App from '../app'

import './index.scss'

import PlatformsService from '../../services/platforms-service'

const platformsService = new PlatformsService();

const Main = () => {
    return (
        <main className='main'>
            <div className='main__inner'>
                <PlatformsServiceProvider value={platformsService}>
                    <App />
                </PlatformsServiceProvider>
            </div>
        </main>
    )
}

export default Main
