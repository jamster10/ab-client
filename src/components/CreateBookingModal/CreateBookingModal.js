import React from 'react'
import Modal from 'react-modal';
import { getMinTime, getLastTime, startTime } from '../../utils/helperFunctions'
import { useForm } from '../../utils/useForm';
import './CreateBookingModal.css'



Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';
// Fix for React Modal testing
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export default function CreateBookingModal({ processForm, isOpen, onRequestClose, formError }) {

    //Handle all the user data fields
    const initForm = {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      type: 'none',
      date: getMinTime(),
      time: startTime()
    }
    const [fields, setFields] = useForm(initForm);

  const handleSubmit = async e => {
    e.preventDefault()
    const isSuccess = await processForm(fields)
    if(isSuccess){
      setFields(null, initForm)
    }
  }
    
  return (
    <Modal className="Modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={'Create Booking Modal'}
      closeTimeoutMS={200}
    >
      <h2>Create Booking</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="user-info">
          <div className="input-section">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" maxLength="40" value={fields.name} onChange={setFields} required/>
          </div>
          <div className="input-section">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" maxLength="50" value={fields.email} onChange={setFields} required/>
          </div>
          <div className="input-section">
            <label htmlFor="street_address">Street Address:</label>
            <input type="text" name="address" id="address" maxLength="50" value={fields.address} onChange={setFields} required/>
          </div>
          <div className="input-section">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" maxLength="50" value={fields.city} onChange={setFields} required/>
          </div>
          <div className="small-input-section">
            <div className="input-section">
              <label htmlFor="State">State:</label>
              <input className="small-input" type="text" name="state" id="state" maxLength="15" value={fields.state} onChange={setFields} required/>
            </div>
            <div className="input-section">
              <label htmlFor="zip">Zip Code:</label>
              <input className="small-input" type="number" name="zip" id="zip"  maxLength={5} minLength="5" value={fields.zip} onChange={setFields} required/>
            </div>
          </div>
        </fieldset>
        <fieldset className="booking-info">
          <div className="input-section">
            <label htmlFor="type">Booking Type:</label>
            <select name="type" onChange={setFields} id="type" value={fields.type}>
              <option value="none">Select an Option</option>
              <option value="housekeeping">Housekeeping</option>
              <option value="dog walk">Dog walks</option>
            </select> 
          </div>
          <div className="input-section">
            <label htmlFor="date">Booking Date:</label>
            <input type="date" name="date" id="date" max={getLastTime()} min={getMinTime()} onChange={setFields} value={fields.date}/>
          </div>
          <div className="input-section">
            <label htmlFor="time">Booking Time:</label>
            <input type="time" name="time" id="time" onChange={setFields} value={fields.time}/>
          </div>
          <div className="error-view">
            {formError ? formError : ''}
          </div>
        </fieldset>
        <input type="submit" className="create-btn" value="Create booking"/>
      </form>
    </Modal>
  )
}
