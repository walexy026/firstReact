import { useState } from 'react'

const AddTask = () => {
    const {text,setText} =useState('')
    const {day,setDay} =useState('')
    const {reminder,setReminder} =useState('false')
  return (
  <form className='add-form'>
    <div className='form-control'>
<label htmlFor="">Task</label>
<input type="text" value={text} onChange = {(e)=> setText(e.target).value} placeholder='Add Task'  />
    </div>
    <div className='form-control'>
<label>Day & Time</label>
<input type="text" placeholder='Add Date and Time' value={day} onChange = {(e)=> setDay(e.target).value} />
    </div>
    <div className='form-control form-control-check'>
<label htmlFor=""> SetReminder</label>
<input type="checkbox" value={reminder} onChange = {(e)=> setReminder(e.currentTarget.checked).value} />
    </div>
    <div className='form-control form-control-check'></div>
    <input type="Submit" value='save task' className='btn btn-block'  />
  </form>
  )
}

export default AddTask