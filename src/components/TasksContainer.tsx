import { useEffect } from 'react'

import { TasksContainer } from '../styles/components/tasksContainer/tasksContainer'
import { TasksHeader } from '../styles/components/tasksContainer/tasksHeader'
import { NoContentBody, TasksBody } from '../styles/components/tasksContainer/tasksBody'
import { Check, HeartHandshake } from 'lucide-react'
import { useTaskContext } from '../contexts/taskContext'
import { ActionContainer, TaskContainer } from '../styles/components/task'
import * as Checkbox from '@radix-ui/react-checkbox';

import { Trash } from 'lucide-react'

const LOCAL_STORAGE_KEY = 'hoje@tasks'


export default function Tasks() {
    
    useEffect(() => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTasks) {
            try {
                const parsedTasks = JSON.parse(storedTasks);
                setTasks(parsedTasks);
              } catch (error) {
                console.error('Error parsing stored tasks:', error);
              }
              
        }
      }, []);


    const taskContext = useTaskContext();
    if (!taskContext){
        return null
    }
    const { tasks, setTasks, deleteTask, changeTaskState } = taskContext;

      
    
    const handleDeleteTask = (id: string) => {
        if (deleteTask && id) {
          deleteTask(id);
          
          if (taskContext!.tasks.length === 1) {
            localStorage.removeItem(LOCAL_STORAGE_KEY);

          } else {
            
            const updatedTasks = [...tasks];
            const taskIndex = updatedTasks.findIndex(task => task.id === id);
            updatedTasks.splice(taskIndex, 1);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
          }
        }
      };
      
      
      

    const handleChangeTaskState = (id: string, isCompleted: boolean) => {
        if (changeTaskState && id) {
          changeTaskState(id, isCompleted);
      
          const updatedTasks = [...tasks]; 
          const taskIndex = updatedTasks.findIndex(task => task.id === id);
      
          if (taskIndex !== -1) {
            updatedTasks[taskIndex].isCompleted = isCompleted;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
          }
        }
      };
    

      // DYNAMIC STYLING
    const getCheckboxStyle = (isCompleted : boolean) => ({
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isCompleted ? '#CCA000' : '#333',
        border: '2px solid #CCA000',
        color: isCompleted ? 'white' : undefined,
        cursor: 'pointer',
      });
    
      
      
  return (
    <TasksContainer>
        <TasksHeader>
            <p>Tarefas criadas <span>{tasks?.length}</span></p>
            <p style={{color: '#fff'}}>Concluídas <span>{tasks?.filter(task => task.isCompleted).length}</span></p>
        </TasksHeader>
        <TasksBody>
            {tasks?.length === 0 ? (
                <>
                    <br/>
                    <HeartHandshake strokeWidth={1} size={'5.25rem'} color='#606060' />
                    <NoContentBody>
                        <p>
                        <strong>
                            Sem pressão. Comece com uma tarefa que você considera prioritária.
                        </strong><br/>
                            Se você achar que ela é muito complexa, quebre-a em pedacinhos e confie no processo!
                        </p>
                    </NoContentBody>
                </>
            ): (
                tasks?.map(task => (
                    <TaskContainer key={task.id}>
                        <ActionContainer>
                            <Checkbox.Root style={getCheckboxStyle(task.isCompleted)}
                                defaultChecked={task.isCompleted}
                                onClick={() => handleChangeTaskState(task.id, !task.isCompleted)}
                                >
                                <Checkbox.Indicator asChild>
                                    <Check absoluteStrokeWidth={false}/>
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                        </ActionContainer>
                        {task.isCompleted ? (
                            <p style={{textDecoration: 'line-through', color: '#a5a4a4'}}>
                                {task.title}
                            </p>
                        ): (
                            <p>
                                {task.title}
                            </p>
                        )}
                        <ActionContainer>
                            <Trash size={'1rem'} onClick={() => handleDeleteTask(task.id)}/>
                        </ActionContainer>
                    </TaskContainer>
                ))
            )}
        </TasksBody>
    </TasksContainer>
  )
}
