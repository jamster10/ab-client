import React, { useState, useEffect } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar'
import CreateBookingModal from './components/CreateBookingModal/CreateBookingModal';
import { parseForm } from './utils/helperFunctions';
import BookingTable from './components/BookingTable/BookingTable'
import BookingApi from './services/booking-api';
import Loading from './components/Loading/Loading';
import PageButtons from './components/PageButtons/PageButtons';

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
  const [filterBy, setFilter] =useState(''); //handle filtering

  useEffect(() => {
    setLoading(true)
    const grabBookings = async () => {
      console.log('im running')
      try{
        const receivedData = await BookingApi.getBookings(bookingData.currentPage, filterBy);    
        setBookingData({
          currentPage: Number(receivedData.current_page),
          lastPage: Number(receivedData.last_page),
          bookings: receivedData.data
        })
        setLoading(false)
      } catch(e){
        setLoading(false)
        console.log(e)
      }
    }
    grabBookings();
  }, [bookingData.currentPage, filterBy])

  
  const handleFormError = error => {
    setFormError(error.message)
    setTimeout(() => setFormError(null), 4000)
  }

  const processForm = async fields => {
    setLoading(true)
    const validatedBooking = (parseForm(fields))
    console.log(validatedBooking)
    console.log('write tests for validation here')
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

  const handleFilter = e => {
    setBookingData({
      ...bookingData,
      currentPage: 1
    });
    setFilter(e.target.value)
  }

  return (
    <div className="App">
      {loading && <Loading/>}
      <HeaderBar/>
      <div className="heading-container">
        <h1 className="bookings-text">Bookings</h1>
        <div className="btn-container">
          <button className="create-btn" onClick={()=>setModal(true)}>Create Booking</button>
          <form>
            <div className="input-section">
              <label htmlFor="type">Filter By:</label>
              <select name="type" onChange={ handleFilter} id="type" value={filterBy}>
                <option value="">Both</option>
                <option value="housekeeping">Housekeeping</option>
                <option value="dog walk">Dog walks</option>
              </select> 
            </div>
          </form>
            
        </div>
      </div>
      <CreateBookingModal
        isOpen={showModal}
        onRequestClose={() => setModal(false)}
        processForm={processForm}
        formError={formError}
      />
      <BookingTable bookings={bookingData.bookings} />
      <PageButtons bookingData={bookingData} setBookingData={setBookingData}/>
    </div>
  );
}

export default App;
