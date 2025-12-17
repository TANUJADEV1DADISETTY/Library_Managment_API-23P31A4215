import db from '../config/db.js';

export const createFine = (data, callback) => {
  db.query("INSERT INTO fines SET ?", data, callback);
};
