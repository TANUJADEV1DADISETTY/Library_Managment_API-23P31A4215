import dayjs from 'dayjs';

export const getBorrowDate = () => {
  return dayjs().toDate();
};

export const getDueDate = () => {
  return dayjs().add(14, 'day').toDate();
};
