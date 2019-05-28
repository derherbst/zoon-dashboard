import React, { Component } from 'react';

import { withPlatformsService } from '../hoc';

import './index.scss';

class Platforms extends Component {

	state = {
		platforms: [
			{
				"id": 1,
				"title": "Google",
				"status": "active",
				"active": true,
				"places": 30,
				"synced": true,
				"pagesToCreate": 0,
				"configured": 30,
				"search": 0,
				"allDone": true,
				"updates": 2,
				"needsWork": false,
				"pagesCreate": 0,
				"rate": 4.5,
				"reviews": 198,
				"unanswered": 15,
				"options": ['Инфа', 'Прайс', 'Фото', 'Акции']

			},
			{
				"id": 2,
				"title": "Flado",
				"status": "active",
				"places": 30,
				"synced": false,
				"pagesToCreate": 3,
				"configured": 4,
				"search": 20,
				"allDone": false,
				"updates": 0,
				"needsWork": true,
				"pagesCreate": 3,
				"rate": 0,
				"reviews": 0,
				"unanswered": 0,
				"options": ['Инфа', 'Прайс', 'Фото', 'Акции']

			},
			{
				"id": 3,
				"title": "2Gis",
				"status": "pending",
				"places": 0,
				"synced": false,
				"pagesToCreate": 3,
				"configured": 0,
				"search": 78,
				"allDone": false,
				"updates": 0,
				"needsWork": true,
				"pagesCreate": 3,
				"rate": null,
				"reviews": 0,
				"unanswered": 0,
				"options": []

			},
			{
				"id": 4,
				"title": "Yell",
				"status": "inactive",
				"places": 0,
				"synced": false,
				"pagesToCreate": 0,
				"configured": 0,
				"search": 78,
				"allDone": false,
				"updates": 0,
				"needsWork": false,
				"pagesCreate": 0,
				"rate": null,
				"reviews": 0,
				"unanswered": 0,
				"options": []

			}
		]
	};

	componentDidMount() {

		const { platformsService } = this.props;

		// console.log(this.props);
		// console.log(platformsService.getPlatforms().then((data) => {
		// 	return {data}
		// }));
		// this.setState({
		// 	platforms: platformsService.getPlatforms()
		// });

	}

	render() {

		console.log(this.state);

		const renderPlatforms = this.state.platforms.map(
			({id,
				        title,
				        status,
				        places,
				        synced,
				        pagesToCreate,
				        configured,
				        search,
			            allDone,
			            updates,
			            needsWork,
			            pagesCreate,
			            rate,
			            reviews,
			            unanswered,
			            options}) => {
			return (
				<div key={id} className={`platforms__item platform platform--${status}`}>
					<div className="platform__inner">
						<div className='platform__title'>{ title }</div>
						{ status === 'active' ?
							allDone ?
								<div className='platform__configured'><span className='platform__config'>все {configured} заведений настроены</span></div> :
								<div className='platform__configured'>
									<span className='platform__config'>{places} заведений</span>
									<span className='platform__config'>{configured} настроено</span>
									<span className='platform__config'>{search} в поиске</span>
								</div>
							: null
						}

						<span className={`platform__sync-status ${synced ? 'platform__status--synced' : ''} mini-card`}>
							{ synced ? 'Синхронизировано' : `Создаем ${pagesCreate} страницы` }
						</span>
						<div className="platform__options">
							{ options.map(option => <div key={option} className="platform__option mini-card">{option}</div>) }
						</div>
						<div className={`platform__rate ${rate === 0 ? 'platform__rate--no-rate' : ''}`}>
							{ rate === null ? '' : ( rate !== 0 ? `${rate} из 5` : `Портал без рейтинга` ) }
						</div>
						{ updates ? <div className='platform__updates'>{updates} обновления</div> :
							needsWork ? <div className='platform__warn'>Требует обновлений</div> : null
						}
						{ status === 'pending' ? <div className='platform__status'>Поиск заведений: 15 из {search}</div> :
							(status === 'inactive' ? <div className='platform__status'>Площадка отключена</div> : null )
						}
						<div className='platform__kebab'>
							<figure></figure>
							<figure></figure>
							<figure></figure>
						</div>
					</div>
					<div className="platform__popup">
						<div className="platform__toggle">
							{ status !== 'inactive' ? 'Выключить' : 'Включить' }
						</div>
					</div>
				</div>
			)
		});

		return (
			<div className='platforms'>
				{ renderPlatforms }
			</div>
		)
	}

}

export default withPlatformsService()(Platforms);