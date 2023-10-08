import { AddTaskBarContainer } from '../styles/components/addTaskBar'
import { Input } from '../styles/components/input'
import { Button } from '../styles/components/button'
import { PlusCircle } from 'lucide-react'
import { useTaskContext } from '../contexts/taskContext'
import { v4 } from 'uuid';
export default function AddTaskBar() {
  const taskContext = useTaskContext()
  const addTask = taskContext?.addTask
  
  
  function handleAddTask() {
    const input = document.getElementById('taskInput') as HTMLInputElement
    if(addTask && input.value !== '') {
      const id = v4()
      const newTask = {
        id,
        title: input.value,
        isCompleted: false,
      }
      addTask(newTask)

      localStorage.setItem('hoje@tasks', JSON.stringify([...taskContext.tasks, newTask]))
      input.value = ''
    }
  }

  return (
    <AddTaskBarContainer>
        <Input id='taskInput' type='text' placeholder='Uma coisa de cada vez. O que você consegue fazer hoje? 🍂' />
        <Button onClick={handleAddTask}>Criar <PlusCircle strokeWidth={3} size={16}  /></Button>
    </AddTaskBarContainer>
  )
}
