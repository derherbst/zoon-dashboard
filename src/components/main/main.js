import React from 'react'

import { TaskServiceProvider } from '../../components/task-service-context'

import App from '../app'

import './index.scss'

import TaskService from '../../services/task-service'

const taskService = new TaskService()

const Main = () => {
    return (
        <main className='main'>
            <div className='main__inner'>
                <TaskServiceProvider value={taskService}>
                    <App />
                </TaskServiceProvider>
            </div>
        </main>
    )
}

export default Main
