import moment from 'moment';
export const getTimeFormat = (time) => moment(time).format('DD/MM/YY HH:mm');
