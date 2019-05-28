import React from 'react'

import Platforms from '../platforms';

import './index.scss'

const App = () => {
    return (
        <div className='app'>
            <div className='app__header'>
                <div className='stat'>
                    <div className='stat__block stat__block--review'>
                        <div className='stat__number'>165</div>
                        <div className='stat__text'>отзывов</div>
                    </div>
                    <div className='stat__block stat__block--not-answered'>
                        <div className='stat__number'>21</div>
                        <div className='stat__text'>неотвеченный отзыв</div>
                    </div>
                    <div className='stat__block stat__block--update'>
                        <div className='stat__number'>50</div>
                        <div className='stat__text'>обновлений</div>
                    </div>
                    <div className='stat__block stat__block--rate'>
                        <div className='stat__number'>4,5</div>
                        <div className='stat__text'>средний рейтинг</div>
                    </div>
                </div>
            </div>
            <div className='app__table'>
	            <Platforms />
            </div>
        </div>
    )
}

export default App
