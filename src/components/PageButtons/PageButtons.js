import React from 'react'
import './PageButtons.css'

export default function PageButtons({ bookingData = {}, setBookingData}) {
  const { currentPage, lastPage } =  bookingData;
  
  const handlePrevious = () => {
    console.log(currentPage)
    setBookingData({
      ...bookingData,
      currentPage: bookingData.currentPage - 1
    })
    console.log(currentPage)

  }
  

  const handleNext = () => {
    console.log(currentPage)
    setBookingData({
      ...bookingData,
      currentPage: bookingData.currentPage + 1
    })
    console.log(currentPage)
  }

  return (
    <div className="button-holder">
      <button disabled={currentPage === 1} onClick={handlePrevious}>Previous</button>
      <button disabled={currentPage === lastPage} onClick={handleNext}>Next</button>
    </div>
  )
}
