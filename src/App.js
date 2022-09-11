import { useState } from "react"
import Header from "./components/Header";
import Tasks  from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [ tasks, setTasks] = useState([  {
    id : 1,
    text: 'Doctors Assignment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
},
{
    id : 2,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true

},
{
    id : 3,
    text: 'Meeting at the school',
    day: 'Feb 5th at 2:30pm',
    reminder: false

},
{
    id : 4,
    text: 'Food shooping',
    day: 'Feb 5th at 2:30pm',
    reminder: true

},
{
    id : 5,
    text: 'Clubbing',
    day: 'Feb 5th at 2:30pm',
    reminder: false

}
])
// deleteTask
const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

// toggle reminder
const  toggleReminder = (id) =>{
setTasks(
tasks.map((task)=>
task.id === id ? {...task, reminder:
  !task.reminder }: task))
}
  return ( 
    <div className="container">
    <Header/>
    <AddTask/>
   {tasks.length > 0 ?( <Tasks tasks ={tasks} onDelete ={deleteTask} onToggle={toggleReminder}/>) :(
    'No tasks to Show'
   )}
    </div>
    
  );
}

export default App
