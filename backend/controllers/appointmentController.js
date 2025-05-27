const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const dbPath = path.join(__dirname, '../models/appointments.json');

// Validação com Joi
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  datetime: Joi.string().isoDate().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(8).required()
});

// Funções auxiliares de persistência
const readData = () => {
  if (!fs.existsSync(dbPath)) return [];
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// GET /api/appointments
const listAppointments = (req, res) => {
  const appointments = readData();
  res.json(appointments);
};

// POST /api/appointments
const createAppointment = (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const appointments = readData();

  const newAppointment = {
    id: Date.now(),
    name: value.name,
    datetime: value.datetime,
    email: value.email,
    phone: value.phone,
    status: 'pendente'
  };

  appointments.push(newAppointment);
  writeData(appointments);

  res.status(201).json(newAppointment);
};

// PUT /api/appointments/:id/status
const updateStatus = (req, res) => {
  const appointments = readData();
  const { id } = req.params;
  const { status } = req.body;

  const validStatus = ['pendente', 'confirmado', 'cancelado'];
  if (!validStatus.includes(status)) {
    return res.status(400).json({ error: 'Status inválido.' });
  }

  const index = appointments.findIndex((a) => a.id == id);
  if (index === -1) {
    return res.status(404).json({ error: 'Agendamento não encontrado.' });
  }

  appointments[index].status = status;
  writeData(appointments);

  res.json(appointments[index]);
};

// DELETE /api/appointments/:id
const deleteAppointment = (req, res) => {
  const appointments = readData();
  const { id } = req.params;

  const filtered = appointments.filter((a) => a.id != id);
  if (filtered.length === appointments.length) {
    return res.status(404).json({ error: 'Agendamento não encontrado.' });
  }

  writeData(filtered);
  res.json({ message: 'Agendamento removido com sucesso.' });
};

module.exports = {
  listAppointments,
  createAppointment,
  updateStatus,
  deleteAppointment
};
