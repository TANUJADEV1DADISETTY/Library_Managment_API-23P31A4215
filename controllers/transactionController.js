import { createTransaction } from '../models/transactionModel.js';
import { getBorrowDate, getDueDate } from '../utils/dateUtils.js';

export const borrowBook = (req, res) => {
  const { book_id, member_id } = req.body;

  const transactionData = {
    book_id,
    member_id,
    borrowed_at: getBorrowDate(),
    due_date: getDueDate(),
    status: 'active'
  };

  createTransaction(transactionData, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Book borrowed successfully" });
  });
};
