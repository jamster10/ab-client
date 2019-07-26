import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar'
import CreateBookingModal from './components/CreateBookingModal/CreateBookingModal';
import { useForm } from './utils/useForm'
import './App.css';

function App() {
  //decide on showing Modal or not
  const [showModal, setModal] = useState(false)

  //Handle all the user data fields
  const [fields, setFields] = useForm({
    name: '',
    email: '',
    street_address: '',
    city: '',
    state: '',
    zip: ''
  })



  return (
    <div className="App">
      <HeaderBar/>
      <div className="heading-container">
        <h1 className="bookings-text">Bookings</h1>
        <button className="create-btn" onClick={()=>setModal(true)}>Create Booking</button>
      </div>
      <CreateBookingModal
          isOpen={showModal}
          onRequestClose={() => setModal(false)}
          userFields={fields}
          handleUserFields={setFields}
          // bookingFields={bookingFields}
          // bookingFields={bookingFields}

          action='new'
        />
    </div>
  );
}

export default App;
