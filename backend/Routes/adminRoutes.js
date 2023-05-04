import express from 'express';


import * as tachesController from '../Controllers/tachesController.js';


const adminRoutes = express.Router();

// Routes pour les tâches
adminRoutes.post('/taches', tachesController.createTaches);
adminRoutes.get('/taches', tachesController.getTaches);
adminRoutes.put('/taches/:id', tachesController.updateTaches);
adminRoutes.delete('/taches/:id', tachesController.deleteTaches);



export default adminRoutes;
