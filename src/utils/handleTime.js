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


