// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../Controllers/MemberFeedback');

router.post('/', feedbackController.createFeedback);
router.get('/', feedbackController.getAllFeedbacks);
router.get('/:id', feedbackController.getFeedbackById);
router.put('/:id', feedbackController.updateFeedback);
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
