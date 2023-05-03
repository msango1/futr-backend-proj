import { Request, Response } from 'express';
import { deleteBookService } from '../services/bookService';

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     description: Delete a book from the in-memory array by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the book to delete
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const bookId = parseInt(req.params.id);
        const result = await deleteBookService(bookId);
        
        if (result.message) {
            res.status(result.status).json({ message: result.message });
        } else {
            res.status(result.status).json({ error: result.error });
        }
    } catch (error) {
        console.error('Error in deleteBook:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};