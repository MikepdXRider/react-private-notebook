export const parseDate = (date) => {
  return date ? new Date(date).toLocaleString() : null;
};
