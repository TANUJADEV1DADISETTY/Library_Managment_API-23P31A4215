import db from '../config/db.js';

export const getAllBooks = (callback) => {
  db.query("SELECT * FROM books", callback);
};

export const getAvailableBooks = (callback) => {
  db.query(
    "SELECT * FROM books WHERE status='available' AND available_copies > 0",
    callback
  );
};

export const addBook = (data, callback) => {
  db.query("INSERT INTO books SET ?", data, callback);
};
