import db from '../config/db.js';

export const addMember = (data, callback) => {
  db.query("INSERT INTO members SET ?", data, callback);
};

export const getMemberById = (id, callback) => {
  db.query("SELECT * FROM members WHERE id = ?", [id], callback);
};
