const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

// Get goals // GET /api/goals // Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.json(goals)
})

// Set goal // POST /api/goals // Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.json(goal)
})

// Update goal // PUT /api/goals/:id // Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    } 

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedGoal)
})

// Delete goal // DELETE /api/goal/:id // Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    } 

    await goal.deleteOne()

    res.json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}