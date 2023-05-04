import express from 'express';
import * as  tachesController from '../Controllers/tachesController.js';

const tacheRoutes = express.Router();

// Routes pour les tâches
tacheRoutes.post('/creerTaches', tachesController.createTaches);
tacheRoutes.get('/affichTaches', tachesController.getTaches);
tacheRoutes.put('/updateTaches/:id', tachesController.updateTaches);
tacheRoutes.delete('/supriTaches/:id', tachesController.deleteTaches);

export default tacheRoutes;


