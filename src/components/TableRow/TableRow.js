import { Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import moment from 'moment';
import './TableRow.css';


import React from 'react'

export const TableRow = ({booking}) => {
  return(
  <Tr>
    <Td>{booking.name}</Td>
    <Td>{booking.email}</Td>
    <Td>{booking.address}</Td>
    <Td>{booking.booking_type}</Td>
    <Td id="timetag">{moment(booking.booking_date, 'YYYY-MM-DD').format('MMM D, YYYY')} at {moment(booking.booking_time, 'HH:mm').format('h:mm a')}</Td>
  </Tr>
)}

