import Taches from '../Models/Taches.js';

// Fonctions pour les opérations CRUD sur le modèle User01

// export const createUser01 = async (req, res) => {
//   try {
//     const user01 = new User01(req.body);
//     await user01.save();
//     res.status(201).json(user01);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getUser01 = async (req, res) => {
//   try {
//     const users = await User01.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateUser01 = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user01 = await User01.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!user01) {
//       return res.status(404).json({ error: 'User01 not found' });
//     }
//     res.status(200).json(user01);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteUser01 = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user01 = await User01.findByIdAndDelete(id);
//     if (!user01) {
//       return res.status(404).json({ error: 'User01 not found' });
//     }
//     res.status(200).json({ message: 'User01 deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Fonctions pour les opérations CRUD sur le modèle Taches

export const createTaches = async (req, res) => {
  try {
    const taches = new Taches(req.body);
    await taches.save();
    res.status(201).json(taches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTaches = async (req, res) => {
  try {
    const taches = await Taches.find({});
    res.status(200).json(taches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTaches = async (req, res) => {
  try {
    const { id } = req.params;
    const taches = await Taches.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!taches) {
      return res.status(404).json({ error: 'Taches not found' });
    }
    res.status(200).json(taches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTaches = async (req, res) => {
  try {
    const { id } = req.params;
    const taches = await Taches.findByIdAndDelete(id);
    if (!taches) {
      return res.status(404).json({ error: 'Taches not found' });
    }
    res.status(200).json({ message: 'Taches deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
