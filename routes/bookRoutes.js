import express from 'express';
import { getBooks, getAvailable, createBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/available', getAvailable);
router.post('/', createBook);

export default router;
