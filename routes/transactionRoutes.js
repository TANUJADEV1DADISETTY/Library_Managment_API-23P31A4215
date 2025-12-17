import express from 'express';
import { borrowBook } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/borrow', borrowBook);

export default router;
