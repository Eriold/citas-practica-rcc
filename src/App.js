import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Forms/Form';
import Appointment from './components/Forms/Appointment';


function App() {

  // Appointment in local storage
  let appointmentStart = JSON.parse(localStorage.getItem('appointments'))
  if(!appointmentStart){
    appointmentStart = [];
  }

  //Array Appointment
  const [appointments, saveAppointments] = useState(appointmentStart)

  // Start operations when the operations change
  useEffect(()=>{
   if(appointmentStart){
     localStorage.setItem('appointments', JSON.stringify(appointments))
   }else{
     localStorage.setItem('appointments', JSON.stringify([]))
   }
  }, [appointments,appointmentStart] )

    //Function read appointment recent and add new appointment
    const addAppointment = appointment =>{
      saveAppointments([...appointments, appointment])
    }

  //Function delete a appointment witch id
  const deleteAppointment = id =>{
    const newAppointment = appointments.filter(appointment => appointment.id !== id)
    saveAppointments(newAppointment)
  }

   const showMessage =()=>{
    return appointments.length === 0? <h2>No hay citas</h2>:<h2>Administrar Citas</h2>
   }

  return (
    <Fragment>
    <h1>Formulario de Citas</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form 
            addAppointment={addAppointment}
          />
        </div>
        <div className="one-half column">
          {showMessage()}
          {appointments.map((appointment, i) => (
            <Appointment
              key={i}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
             />
         ))}
        </div>

      </div>
    </div>
    </Fragment>
  );
}

export default App;
