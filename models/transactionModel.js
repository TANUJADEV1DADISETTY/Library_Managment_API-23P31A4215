import db from '../config/db.js';

export const createTransaction = (data, callback) => {
  db.query("INSERT INTO transactions SET ?", data, callback);
};
