import React from 'react';
import { TaskServiceConsumer } from '../task-service-context';

const withCarsService = () => (Wrapped) => {

	return (props) => {
		return (
			<TaskServiceConsumer>
				{
					(carsService) => {
						return (<Wrapped {...props}
						                 carsService={carsService}/>);
					}
				}
			</TaskServiceConsumer>
		);
	}
};

export default withCarsService;
