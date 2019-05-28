import React from 'react';
import { PlatformsServiceConsumer } from '../platforms-service-context';

const withPlatformsService = () => (Wrapped) => {

	return (props) => {
		return (
			<PlatformsServiceConsumer>
				{
					(platformsService) => {
						return (<Wrapped {...props}
						                 platformsService={platformsService}/>);
					}
				}
			</PlatformsServiceConsumer>
		);
	}
};

export default withPlatformsService;
