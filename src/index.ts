import express from 'express';
import bookRoutes from './controllers/bookRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bookRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
