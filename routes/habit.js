const express = require('express');

const router = express.Router();
const habitController = require('../controllers/habit_controller');

// create new Todo
router.post('/create-habit', habitController.createHabit);
// change status of the Todo
router.get('/toggle-status', habitController.toggleStatus);
// delete the Todo
router.get('/delete-habit', habitController.deleteHabit);
// updates Todo
router.post('/edit-habit', habitController.editHabit);

module.exports = router;