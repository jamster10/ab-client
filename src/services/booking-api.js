import config from '../config'

export default {
  async getBookings(page = 1, filterBy='') {
    const bookings = await fetch(`${config.API_ENDPOINT}?page=${page}&filter=${filterBy}`)
      
    if (!bookings.ok) {
      return bookings.json().then(e => Promise.reject(e))
    }
    return await bookings.json();
  },
  async createBooking(newBooking){
    const insertedBooking = await fetch(`${config.API_ENDPOINT}`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking)
    }) 
    if (!insertedBooking.ok) {
      return insertedBooking.json().then(e => Promise.reject(e))
    } 
    return await insertedBooking.json();
  },
}