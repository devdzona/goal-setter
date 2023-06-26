// Get goals // GET /api/goals // Private
const getGoals = (req, res) => {
    res.json({message: 'Get goals'})
}

// Set goal // POST /api/goals // Private
const setGoal = (req, res) => {
    res.json({message: 'Set goal'})
}

// Update goal // PUT /api/goals/:id // Private
const updateGoal = (req, res) => {
    res.json({message: `Update goal ${req.params.id}`})
}

// Delete goal // DELETE /api/goal/:id // Private
const deleteGoal = (req, res) => {
    res.json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}