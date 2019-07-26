import React, { Component } from 'react'
import Modal from 'react-modal';
import { getMinTime, getLastTime, startTime } from '../../utils/handleTime'
import './CreateBookingModal.css'



Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';
// Fix for React Modal testing
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export default function CreateBookingModal({userFields, handleUserFields, handleSubmit, isOpen, onRequestClose}) {
  console.log(startTime())  ;
    return (
      <Modal className="Modal"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={'Create Booking Modal'}
        closeTimeoutMS={200}
      >
        <h2>Create Booking</h2>
        <form>
          <fieldset className="user-info">
            <div className="input-section">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" maxLength="40" value={userFields.name} onChange={handleUserFields} required/>
            </div>
            <div className="input-section">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" maxLength="50" value={userFields.email} onChange={handleUserFields} required/>
            </div>
            <div className="input-section">
              <label htmlFor="street_address">Street Address:</label>
              <input type="text" name="address" id="address" maxLength="50" value={userFields.address} onChange={handleUserFields} required/>
            </div>
            <div className="input-section">
              <label htmlFor="city">City:</label>
              <input type="text" name="city" id="city" maxLength="50" value={userFields.city} onChange={handleUserFields} required/>
            </div>
            <div className="small-input-section">
              <div className="input-section">
                <label htmlFor="State">State:</label>
                <input className="small-input" type="text" name="state" id="state" maxLength="15" value={userFields.state} onChange={handleUserFields} required/>
              </div>
              <div className="input-section">
                <label htmlFor="zip">Zip Code:</label>
                <input className="small-input" type="number" name="zip" id="zip"  maxLength={5} minLength="5" value={userFields.zip} onChange={handleUserFields} required/>
              </div>
            </div>
          </fieldset>
          <fieldset className="booking-info">
            <div className="input-section">
              <label htmlFor="type">Booking Type:</label>
              <select name="type" onChange={handleUserFields} id="type" value={userFields.type}>
                <option value="none">Select an Option</option>
                <option value="housekeeping">Housekeeping</option>
                <option value="dog walk">Dog walks</option>
              </select> 
            </div>
            <div className="input-section">
              <label htmlFor="date">Booking Date:</label>
              <input type="date" name="date" id="date" max={getLastTime()} min={getMinTime()} onChange={handleUserFields} value={userFields.date}/>
            </div>
            <div className="input-section">
              <label htmlFor="time">Booking Time:</label>
              <input type="time" name="time" id="time" onChange={handleUserFields} value={userFields.time}/>
            </div>
          </fieldset>
          <input type="submit" className="create-btn" onSubmit={handleSubmit} value="Create booking"/>
        </form>
      </Modal>
    )
}
