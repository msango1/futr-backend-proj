import { Request, Response } from 'express';
import { createBookService } from '../services/bookService';
import  Book  from '../models/bookModel';

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Create a new book and add it to the in-memory array.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
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

  export async function createBook (req: Request, res: Response) {
    try {
      const bookData: Omit<Book, 'id'> = req.body;
      const result = await createBookService(bookData);
  
      if (result.data) {
        res.status(result.status).json(result.data);
      } else {
        res.status(result.status).json({ message: result.error });
      }
    } catch (error) {
      console.error('Error in createBook:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };