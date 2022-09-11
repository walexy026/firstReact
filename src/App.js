import Header from "./components/Header";
import Tasks  from "./components/Tasks";
import { useState } from "react"

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
  return (
    <div className="container">
    <Header/>
   {tasks.length > 0 ?( <Tasks tasks ={tasks} onDelete ={deleteTask}/>) :(
    'No tasks to Show'
   )}
    </div>
    
  );
}

export default App
