import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { FaWindowClose } from 'react-icons/fa'

function GoalItem({goal}) {
    const dispatch = useDispatch()

  return (
    <div className='goal goal-background'>
      <div>
        {new Date(goal.createdAt).toLocaleString('de-DE')}
      </div>
      <h2>{goal.text}</h2>
      <button className='close' onClick={() => {dispatch(deleteGoal(goal._id))}}><FaWindowClose></FaWindowClose></button>
    </div>
  )
}

export default GoalItem
