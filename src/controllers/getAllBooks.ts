import { Request, Response } from 'express';
import { getAllBooksService } from '../services/bookService';

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve a list of books
 *     description: Retrieve a list of books from the in-memory array.
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

export async function getAllBooks (req: Request, res: Response) {
    const { status, data, error } = await getAllBooksService();
    res.status(status).json(data || error);
  };