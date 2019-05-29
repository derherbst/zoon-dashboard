import React, { Component, Fragment } from 'react'

import { withPlatformsService } from '../hoc'

import './index.scss'

class Platforms extends Component {
    state = {
        platforms: [
            {
                id: 1,
                title: 'Google',
                status: 'active',
                active: true,
                places: 30,
                synced: true,
                pagesToCreate: 0,
                configured: 30,
                search: 0,
                allDone: true,
                updates: 2,
                needsWork: false,
                pagesCreate: 0,
                rate: 4.5,
                reviews: 198,
                unanswered: 15,
                options: ['Инфа', 'Прайс', 'Фото', 'Акции'],
                modalOpened: false,
            },
            {
                id: 2,
                title: 'Flado',
                status: 'active',
                places: 30,
                synced: false,
                pagesToCreate: 3,
                configured: 4,
                search: 20,
                allDone: false,
                updates: 0,
                needsWork: true,
                pagesCreate: 3,
                rate: 0,
                reviews: 0,
                unanswered: 0,
                options: ['Инфа', 'Прайс', 'Фото', 'Акции'],
                modalOpened: false,
            },
            {
                id: 3,
                title: '2Gis',
                status: 'pending',
                places: 0,
                synced: false,
                pagesToCreate: 3,
                configured: 0,
                search: 78,
                allDone: false,
                updates: 0,
                needsWork: true,
                pagesCreate: 3,
                rate: null,
                reviews: 0,
                unanswered: 0,
                options: [],
                modalOpened: false,
            },
            {
                id: 4,
                title: 'Yell',
                status: 'inactive',
                places: 0,
                synced: false,
                pagesToCreate: 0,
                configured: 0,
                search: 78,
                allDone: false,
                updates: 0,
                needsWork: false,
                pagesCreate: 0,
                rate: null,
                reviews: 0,
                unanswered: 0,
                options: [],
                modalOpened: false,
            },
        ],
    }

    onToggleDone = id => {
        this.setState(({ platforms }) => {
            return {
                platforms: this.toggleStatus(platforms, id, 'status'),
            }
        })
    }

    toggleStatus = (arr, id, propName) => {
        const idx = arr.findIndex(el => el.id === id)

        const oldItem = arr[idx]

        let newItem

        if (propName === 'status') {
            newItem = {
                ...oldItem,
                [propName]: oldItem[propName] === 'inactive' ? 'active' : 'inactive',
            }
        }

        if (propName === 'modalOpened') {
            newItem = {
                ...oldItem,
                [propName]: !oldItem[propName],
            }
        }

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
    }

    toggleModal = (e, id, modalOpened) => {
        console.log(!e.target.closest('.platform__kebab'))
        console.log(modalOpened)
        console.log(this.state)
        if (!e.target.closest('.platform__kebab') && modalOpened) {
            console.log(123)
            this.setState(({ platforms }) => {
                return {
                    platforms: this.toggleStatus(platforms, id, 'modalOpened'),
                }
            })
        }

        if (e.target.closest('.platform__kebab')) {
            this.setState(({ platforms }) => {
                return {
                    platforms: this.toggleStatus(platforms, id, 'modalOpened'),
                }
            })
        }
    }

    render() {
        const { platforms } = this.state

        const renderPlatforms = platforms.map(
            ({
                id,
                title,
                status,
                places,
                synced,
                configured,
                search,
                allDone,
                updates,
                needsWork,
                pagesCreate,
                rate,
                reviews,
                unanswered,
                options,
                modalOpened,
            }) => {
                return (
                    <div
                        key={id}
                        className={`platforms__item platform platform--${status}`}
                        onClick={e => this.toggleModal(e, id, modalOpened)}
                    >
                        <div className='platform__inner'>
                            <div className='platform__title'>{title}</div>
                            {status === 'active' ? (
                                allDone ? (
                                    <div className='platform__configured'>
                                        <span className='platform__config'>все {configured} заведений настроены</span>
                                    </div>
                                ) : (
                                    <div className='platform__configured'>
                                        <span className='platform__config'>{places} заведений</span>
                                        <span className='platform__config'>{configured} настроено</span>
                                        <span className='platform__config'>{search} в поиске</span>
                                    </div>
                                )
                            ) : null}

                            {status !== 'inactive' ? (
                                <div className='platform__options-wrapper'>
                                    <span
                                        className={`platform__sync-status ${
                                            synced ? 'platform__sync-status--synced' : ''
                                        } mini-card`}
                                    >
                                        {synced ? 'Синхронизировано' : `Создаем ${pagesCreate} страницы`}
                                    </span>
                                    <div className='platform__options'>
                                        {options.map(option => (
                                            <div key={option} className='platform__option mini-card'>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}

                            {status !== 'inactive' ? (
                                <div className={`platform__rate ${rate === 0 ? 'platform__rate--no-rate' : ''}`}>
                                    {rate === null ? (
                                        ''
                                    ) : rate !== 0 ? (
                                        <React.Fragment>
                                            <span className='platform__rate-num'>{rate} из 5</span>
                                            <span>
                                                {reviews} отзывов, {unanswered} неотвеченных
                                            </span>
                                        </React.Fragment>
                                    ) : (
                                        `Портал без рейтинга`
                                    )}
                                </div>
                            ) : null}

                            {updates ? (
                                <div className='platform__updates'>{updates} обновления</div>
                            ) : needsWork ? (
                                <div className='platform__warn'>Требует обновлений</div>
                            ) : null}
                            {status === 'pending' ? (
                                <div className='platform__status'>Поиск заведений: 15 из {search}</div>
                            ) : status === 'inactive' ? (
                                <div className='platform__status'>Площадка отключена</div>
                            ) : null}
                            <div className='platform__kebab'>
                                <figure />
                                <figure />
                                <figure />
                            </div>
                        </div>
                        <div className={`platform__popup ${modalOpened ? 'is-opened' : ''}`}>
                            <div className='platform__popup-inner'>
                                <div className='platform__toggle' onClick={() => this.onToggleDone(id)}>
                                    {status !== 'inactive' ? 'Выключить' : 'Включить'}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        )

        return <div className='platforms'>{renderPlatforms}</div>
    }
}

export default withPlatformsService()(Platforms)
