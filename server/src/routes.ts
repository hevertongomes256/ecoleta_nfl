import express, { response } from 'express';

import PointsController from './controllers/PointsController'
import ItemsControler from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsControler = new ItemsControler();

routes.get('/items', itemsControler.index);
// FALTA UPLOADS DE IMAGENS
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show); 

 export default routes;