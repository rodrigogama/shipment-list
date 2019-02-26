import { format } from 'date-fns';

export const formatCurrency = value =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

export const formatDate = (date, dateFormat = 'dddd, D MMMM, YYYY') => format(date, dateFormat);
