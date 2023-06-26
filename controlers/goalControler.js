const asyncHandler = require('express-async-handler')

// Get goals // GET /api/goals // Private
const getGoals = asyncHandler(async (req, res) => {
    res.json({message: 'Get goals'})
})

// Set goal // POST /api/goals // Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
})

// Update goal // PUT /api/goals/:id // Private
const updateGoal = asyncHandler(async (req, res) => {
    res.json({message: `Update goal ${req.params.id}`})
})

// Delete goal // DELETE /api/goal/:id // Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}