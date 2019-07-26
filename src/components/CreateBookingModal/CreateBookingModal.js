import React, { Component } from 'react'
import Modal from 'react-modal';
import './CreateBookingModal.css'


Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';
// Fix for React Modal testing
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export default function CreateBookingModal({userFields, handleUserFields, isOpen, onRequestClose}) {


    return (
      <Modal className="Modal"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      // style={modalStyles}
      contentLabel={'Create Booking Modal'}
      closeTimeoutMS={200}
      >
        <h2>Create Booking</h2>
      </Modal>
    )
}
