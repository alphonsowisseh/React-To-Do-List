import React from 'react'

export default function AddTodo() {
  return (
    <form style={{display: 'flex'}}>
      <input type='text' name='title' placeholder='Add To Do' style={{flex: '10', padding: '5px', border: '1px solid #f4f4f4'}} />
      <input type='submit' value='Submit' className='btn' style={{flex: '1'}} />
    </form>
  )
}
