import React, { useEffect, useState } from 'react';
import AppointmentItem from './AppointmentItem';

const AppointmentList = ({ t }) => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/appointments');
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error('Erro ao carregar agendamentos:', err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      const updated = await res.json();
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? updated : a))
      );
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: 'DELETE',
      });

      setAppointments((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error('Erro ao remover agendamento:', err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">{t('status')}</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">{t('noAppointments')}</p>
      ) : (
        appointments.map((appt) => (
          <AppointmentItem
            key={appt.id}
            appointment={appt}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
            t={t}
          />
        ))
      )}
    </div>
  );
};

export default AppointmentList;
