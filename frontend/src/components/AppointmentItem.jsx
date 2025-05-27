import React from 'react';

const AppointmentItem = ({ appointment, onStatusChange, onDelete, t }) => {
  const { id, name, email, phone, datetime, status } = appointment;

  const statusColors = {
    pendente: 'text-yellow-600',
    confirmado: 'text-green-600',
    cancelado: 'text-red-600',
  };

  return (
    <div className="border rounded p-4 bg-white shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{email} • {phone}</p>
        <p className="text-sm text-gray-500">{new Date(datetime).toLocaleString()}</p>
        <p className={`text-sm font-semibold ${statusColors[status]}`}>{t('status')}: {t(status)}</p>
      </div>

      <div className="flex gap-2">
        {status === 'pendente' && (
          <>
            <button onClick={() => onStatusChange(id, 'confirmado')} className="px-3 py-1 text-sm bg-green-500 text-white rounded">
              {t('confirm')}
            </button>
            <button onClick={() => onStatusChange(id, 'cancelado')} className="px-3 py-1 text-sm bg-yellow-500 text-white rounded">
              {t('cancel')}
            </button>
          </>
        )}
        <button onClick={() => onDelete(id)} className="px-3 py-1 text-sm bg-red-600 text-white rounded">
          {t('delete')}
        </button>
      </div>
    </div>
  );
};

export default AppointmentItem;
