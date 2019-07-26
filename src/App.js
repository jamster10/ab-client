import React, { useState, useEffect } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar'
import CreateBookingModal from './components/CreateBookingModal/CreateBookingModal';
import { parseForm } from './utils/helperFunctions';
import BookingTable from './components/BookingTable/BookingTable'
import BookingApi from './services/booking-api';
import Loading from './components/Loading/Loading'
import './App.css';

function App() {
  const [bookingData, setBookingData ] = useState({
    currentPage: 1,
    lastPage: null,
    bookings: []
  }); //store data from server
  const [formError, setFormError] = useState(null); //handle form errors
  const [showModal, setModal] = useState(false); //decide on showing Modal or not
  const [loading, setLoading] =useState(false); //handle async loading

  useEffect(() => {
    setLoading(true)
    const grabBookings = async () => {
      try{
        const receivedData = await BookingApi.getBookings(bookingData.currentPage);    
        setBookingData({
          currentPage: receivedData.currentPage + 1,
          lastPage: receivedData.lastPage,
          bookings: receivedData.data
        })
        setLoading(false)
      } catch(e){
        setLoading(false)
        console.log(e)
      }
    }
    grabBookings();
  }, [bookingData.currentPage])

  


  
  const handleFormError = error => {
    setFormError(error.message)
    setTimeout(() => setFormError(null), 4000)
  }

  const processForm = async fields => {
    setLoading(true)
    const validatedBooking = (parseForm(fields))
    console.log(validatedBooking)
    if(validatedBooking.error){
      setLoading(false)
      handleFormError({message: validatedBooking.error.message})
      return
    }
    try{
      const newBooking = await BookingApi.createBooking(validatedBooking);

      setLoading(false);
      setModal(false);
      return true;
    } catch (e){
      setLoading(false);
      handleFormError(e);
      return false;
    }
  }

  return (
    <div className="App">
      {loading && <Loading/>}
      <HeaderBar/>
      <div className="heading-container">
        <h1 className="bookings-text">Bookings</h1>
        <button className="create-btn" onClick={()=>setModal(true)}>Create Booking</button>
      </div>
      <CreateBookingModal
        isOpen={showModal}
        onRequestClose={() => setModal(false)}
        processForm={processForm}
        formError={formError}
      />
      <BookingTable bookings={bookingData.bookings} />
    </div>
  );
}

export default App;
