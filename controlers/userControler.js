// Register new user // POST /api/users // Public
const registerUser = (req, res) => {
    res.json({ message: 'New User registred'})
}
// Authenticate a user // POST /api/users // Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User'})
}

// Get user data // GET /api/users/me // Public
const getMe = (req, res) => {
    res.json({ message: 'Displayed logged in user'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}