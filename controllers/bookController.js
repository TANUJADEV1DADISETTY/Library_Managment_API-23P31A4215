import { getAllBooks, getAvailableBooks, addBook } from '../models/bookModel.js';

export const getBooks = (req, res) => {
  getAllBooks((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

export const getAvailable = (req, res) => {
  getAvailableBooks((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

export const createBook = (req, res) => {
  addBook(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Book added successfully" });
  });
};
