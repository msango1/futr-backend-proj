import express from 'express';
import { getAllBooks } from './getAllBooks';
import { getBookById } from './getBookById';
import { createBook } from './createBook';
import { updateBook } from './updateBook';
import { deleteBook } from './deleteBook';

const router = express.Router();

router.get('/api/books', getAllBooks);
router.get('/api/books/:id', getBookById);
router.post('/api/books', createBook);
router.put('/api/books/:id', updateBook);
router.delete('/api/books/:id', deleteBook);

export default router;
