import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Book API using Node.js, TypeScript, and Express',
    },
    components: {
      schemas: {
        Book: {
          type: 'object',
          required: ['id', 'title', 'author', 'year', 'isbn'],
          properties: {
            id: {
              type: 'integer',
              description: 'The auto-generated ID of the book',
            },
            title: {
              type: 'string',
              description: 'The title of the book',
            },
            author: {
              type: 'string',
              description: 'The author of the book',
            },
            year: {
              type: 'integer',
              description: 'The year the book was published',
            },
            isbn: {
              type: 'string',
              description: 'The ISBN of the book',
            },
          },
          example: {
            id: 1,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            year: 1988,
            isbn: '123456789'
          },
        },
        BookCreate: {
          type: 'object',
          required: ['title', 'author', 'year', 'isbn'],
          properties: {
            title: {
              type: 'string',
              description: 'The title of the book',
            },
            author: {
              type: 'string',
              description: 'The author of the book',
            },
            year: {
              type: 'integer',
              description: 'The year the book was published',
            },
            isbn: {
              type: 'string',
              description: 'The ISBN of the book',
            },
          },
          example: {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            year: 1988,
            isbn: '123456789'
          },
        },
        BookUpdate: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'The title of the book',
            },
            author: {
              type: 'string',
              description: 'The author of the book',
            },
            year: {
              type: 'integer',
              description: 'The year the book was published',
            },
            isbn: {
              type: 'string',
              description: 'The ISBN of the book',
            },
          },
        },
      },
    },
  },
  apis: ['./src/**/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
