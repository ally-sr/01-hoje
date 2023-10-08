import { AppContainer, AppContent } from '../styles/Main'
import AddTaskBar from './AddTaskBar'
import Tasks from './TasksContainer'
import { TaskProvider } from '../providers/TasksProvider'


export default function Main() {
    return (
        <TaskProvider>
            <AppContainer>
                <AppContent>
                    <AddTaskBar/>
                    <Tasks />
                </AppContent>
            </AppContainer>
        </TaskProvider>
    )
}
