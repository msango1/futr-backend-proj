import { Request, Response } from 'express';
import { getBookByIdService } from '../services/bookService';

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retrieve a book by ID
 *     description: Retrieve a single book from the in-memory array by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the book to retrieve
 *     responses:
 *       200:
 *         description: A single book
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
 */

export async function getBookById (req: Request, res: Response) {
    const bookId = parseInt(req.params.id);
    const { status, data, error } = await getBookByIdService(bookId);
    res.status(status).json(data || { message: error });
  };