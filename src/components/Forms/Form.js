import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Form = ({addAppointment})=>{

    //Create state of Appointment
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        dateAppointment: '',
        timeAppointment: '',
        symptoms: ''
    })

    const [error, setError] = useState(false)

    //Function of execute with input
    const handleChange = (e)=>{
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    //Extract values
    const {pet, owner, dateAppointment, timeAppointment, symptoms} = appointment;

    //When the user submit

    const submitAppointment = e =>{
        e.preventDefault()
        // alert('Enviando')
        //validate
        if( pet.trim()==='' ||
            owner.trim()==='' || 
            dateAppointment.trim()==='' || 
            timeAppointment.trim()==='' || 
            symptoms.trim()===''){
                setError(true)
                return
        }

        setError(false)

        //Add ID
        appointment.id = uuid()

        //Create Appointment
        addAppointment(appointment)

        //Reset form
        setAppointment({
            pet: '',
            owner: '',
            dateAppointment: '',
            timeAppointment: '',
            symptoms: ''
        })
    }
    return(
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitAppointment}
            >
                <label htmlFor="">Nombre Mascota</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre mascota"  
                    onChange={handleChange}    
                    value={pet}              
                    />

                <label htmlFor="">Nombre Dueño</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre Dueño"  
                    onChange={handleChange}     
                    value={owner}               
                    />

                <label htmlFor="">Fecha</label>
                <input 
                    type="date"
                    name="dateAppointment"
                    className="u-full-width"    
                    onChange={handleChange}      
                    value={dateAppointment}        
                    />

                <label htmlFor="">Hora</label>
                <input 
                    type="time"
                    name="timeAppointment"
                    className="u-full-width"      
                    onChange={handleChange}        
                    value={timeAppointment}    
                    />

                <label htmlFor="">Síntomas</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    onChange={handleChange}  
                    value={symptoms}
                    >
                </textarea>

                <button
                    type="submit"
                    className="u-u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    addAppointment: PropTypes.func.isRequired
}

export default Form