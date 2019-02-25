import { format } from 'date-fns';

export const formatCurrency = value =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

export const formatDate = date => format(date, 'dddd, D MMMM, YYYY');
