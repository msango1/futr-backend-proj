import  Book  from '../models/bookModel';

const books: Book[] = [
    {
        id: 1,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988,
        isbn: '123456789'
    }
];

export async function getAllBooksService () {
    try {
        return { status: 200, data: books };
    } catch (err) {
        const errorMessage = (err as Error).message || 'An error occurred';
        return { status: 400, error: errorMessage };
    }
};

export async function getBookByIdService (id: number) {
  try {
    const book = books.find(book => book.id === id);

    if (!book) {
      throw new Error('Book not found');
    }

    return { status: 200, data: book };
  } catch (err) {
    const errorMessage = (err as Error).message || 'An error occurred';
    return { status: 404, error: errorMessage };
  }
};

export async function createBookService (book: Omit<Book, 'id'>) {
    try {

        const newId = books.length === 0 ? 1 : Math.max(...books.map(b => b.id)) + 1;
        const newBook: Book = { id: newId, ...book };
        books.push(newBook);
        return { status: 201, data: newBook };
    } catch (err) {
        const errorMessage = (err as Error).message || 'An error occurred';
        return { status: 400, error: errorMessage };
    }
};


  export async function updateBookService (id: number, updatedBook: Omit<Book, 'id'>) {
    try {
      const bookIndex = books.findIndex(book => book.id === id);
  
      if (bookIndex === -1) {
        throw new Error('Book not found');
      }
  
      const newBook: Book = { id, ...updatedBook };
      books[bookIndex] = newBook;
      return { status: 200, data: newBook };
    } catch (err) {
      const errorMessage = (err as Error).message || 'An error occurred';
      return { status: 400, error: errorMessage };
    }
  };

  export async function deleteBookService (id: number) {
    try {
      const bookIndex = books.findIndex(book => book.id === id);
  
      if (bookIndex === -1) {
        throw new Error('Book not found');
      }
  
      books.splice(bookIndex, 1);
      return { status: 200, message: 'Book deleted successfully' };
    } catch (err) {
      const errorMessage = (err as Error).message || 'An error occurred';
      return { status: 400, error: errorMessage };
    }
  };