import React from 'react';
import PropTypes from 'prop-types'

const Appointment = ({appointment, deleteAppointment}) => (
        <div className="cita">
            <p>Mascota: <span>{appointment.pet}</span></p>
            <p>Dueño: <span>{appointment.owner}</span></p>
            <p>Fecha: <span>{appointment.dateAppointment}</span></p>
            <p>Hora: <span>{appointment.timeAppointment}</span></p>
            <p>Síntomas: <span>{appointment.symptoms}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={()=> deleteAppointment(appointment.id)}
            >Eliminar  &times;</button>
        </div>
    );

Appointment.propTypes ={
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;