import Taches from '../Models/Taches.js';

// Créer une nouvelle tâche
export const createTaches = async (req, res) => {
  try {
   
    // console.log(req.body)cd
    const tache =  await Taches.create(req.body);
    res.status(201).json(tache);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer toutes les tâches
export const getTaches = async (req, res) => {
  try {
    const taches = await Taches.find();
    res.status(200).json(taches);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Récupérer une tâche en particulier
export const getTacheById = async (req, res) => {
  try {
    const { id } = req.params;
    const tache = await Taches.findById(id);
    if (!tache) throw new Error('Tâche introuvable');
    res.status(200).json(tache);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Mettre à jour une tâche
export const updateTaches = async (req, res) => {
  try {
    const { id } = req.params;
    const tache = await Taches.findByIdAndUpdate(id, req.body, { new: true });
    if (!tache) throw new Error('Tâche introuvable');
    res.status(200).json(tache);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une tâche
export const deleteTaches = async (req, res) => {
  try {
    const { id } = req.params;
    const tache = await Taches.findByIdAndRemove(id);
    if (!tache) throw new Error('Tâche introuvable');
    res.status(200).json({ message: 'Tâche supprimée avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
