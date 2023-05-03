import { Request, Response } from 'express';
import { updateBookService } from '../services/bookService';
import  Book  from '../models/bookModel';

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     description: Update an existing book in the in-memory array by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The updated book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

  export async function updateBook (req: Request, res: Response) {
    try {
      const bookId = parseInt(req.params.id);
      const bookData: Omit<Book, 'id'> = req.body;
      const result = await updateBookService(bookId, bookData);
      
      if (result.data) {
        res.status(result.status).json(result.data);
      } else {
        res.status(result.status).json({ message: result.error });
      }
    } catch (error) {
      console.error('Error in updateBook:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };