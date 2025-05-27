import React, { useState } from 'react';

const AppointmentForm = ({ onAdd, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    datetime: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      onAdd(data);
      setFormData({ name: '', email: '', phone: '', datetime: '' });
    } catch (err) {
      console.error('Erro ao agendar consulta:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">{t('newAppointment')}</h2>

      <input
        type="text"
        name="name"
        placeholder={t('name')}
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder={t('email')}
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder={t('phone')}
        value={formData.phone}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="datetime-local"
        name="datetime"
        value={formData.datetime}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {t('schedule')}
      </button>
    </form>
  );
};

export default AppointmentForm;
