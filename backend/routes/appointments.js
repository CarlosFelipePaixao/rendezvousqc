const express = require('express');
const router = express.Router();

const {
  listAppointments,
  createAppointment,
  updateStatus,
  deleteAppointment
} = require('../controllers/appointmentController');

// Rotas principais
router.get('/', listAppointments);
router.post('/', createAppointment);
router.put('/:id/status', updateStatus);
router.delete('/:id', deleteAppointment);

module.exports = router;
