import React from 'react';

const {
	Provider: PlatformsServiceProvider,
	Consumer: PlatformsServiceConsumer
} = React.createContext();

export {
	PlatformsServiceProvider,
	PlatformsServiceConsumer
};