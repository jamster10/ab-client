import moment from 'moment';

export const getMinTime = () => {
  return moment().format('YYYY-MM-DD')
}
export const getLastTime = () => {
  const currentDateArray = moment().add(10, 'years').calendar().split('/');
  const [m, d, y] = currentDateArray;
  return [y, m, d].join('-')
}

export const startTime = () => {
  return moment().format('HH:mm')
}

export const parseForm = fields => {
  
  return {
    email: fields.email,
    name: fields.name,
    address: `${fields.address}\n${fields.city}, ${fields.state}, ${fields.zip}`,
    booking_type: fields.type,
    booking_date: fields.date,
    booking_time: fields.time,
  }

}



