import React, { useMemo } from 'react'
import { TableRow } from '../TableRow/TableRow'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const generateTableRows = bookings => {console.log( 'ran');return bookings.map( booking => <TableRow  key ={booking.created_at}booking={booking}/>)}
export default function BookingTable({bookings = []}) {
  

  const genTableRows = useMemo(() => generateTableRows(bookings), [bookings])

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Customer</Th>
          <Th>Email</Th>
          <Th>Address</Th>
          <Th>Booking</Th>
          <Th>Booking Date/Time</Th>
        </Tr>
      </Thead>
      <Tbody>
        {genTableRows}
      </Tbody>
    </Table>
  )
}