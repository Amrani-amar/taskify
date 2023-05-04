import React, { useState } from 'react';
import apiTaches from '../api/apitaches';
import { useQuery, useMutation } from '@tanstack/react-query';

const Taches = () => {
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [nouvelleDescription, setNouvelleDescription] = useState('');

  // Récupération des données des tâches depuis l'API à l'aide de useQuery et la fonction apiTaches.getAll()
  const {data, refetch} = useQuery(["tache"], apiTaches.getAll );

  // Utilisation de useMutation pour gérer la suppression, l'ajout et la modification de tâches
  const deleteTacheMutation = useMutation(apiTaches.remove ,{
    onSuccess : async ()=>{
      await refetch(); // mise à jour des données affichées après la suppression
    }
  });

  const ajouterTacheMutation = useMutation(apiTaches.create ,{
    onSuccess : async ()=>{
      await refetch(); // mise à jour des données affichées après l'ajout
    }
  });

  const updateTacheMutation = useMutation(apiTaches.update ,{
    onSuccess : async ()=>{
      await refetch(); // mise à jour des données affichées après la modification
    }
  });
 
  // Fonction appelée lors de la soumission du formulaire pour ajouter une tâche
  const handleAjouterTache = async (e) => {
    e.preventDefault()
    ajouterTacheMutation.mutate({titre:nouvelleTache, description: nouvelleDescription})
    setNouvelleTache('');
    setNouvelleDescription('');
  };

  // Fonction appelée lors du clic sur le bouton "modifier" d'une tâche
  const handleupdateTache = (tacheid) => {
    updateTacheMutation.mutate({titre:nouvelleTache, description: nouvelleDescription, id:tacheid})
  };

  return (
    <div>


      
      <h1>Liste des tâches :</h1>
      <ul>
        {data?.map(tache => (
          <li key={tache._id}>
            <form>
              {/* Champ d'édition du titre de la tâche */}
              <input defaultValue={tache.titre} onChange={(e) => setNouvelleTache(e.target.value)} />

              


              {/* Bouton de suppression de la tâche */}
              <button onClick={() => deleteTacheMutation.mutate(tache._id)}>Supprimer</button>

              {/* Bouton de modification de la tâche */}
              <button onClick={ (e)=>{
                e.preventDefault()
                handleupdateTache(tache._id)
              }}>modifier</button>
            </form>
          </li>
        ))}
      </ul>
      {/* Formulaire d'ajout d'une nouvelle tâche */}
      <div>
        <form onSubmit={handleAjouterTache}>
          <input type="text" placeholder="Ajouter une tâche" value={nouvelleTache} onChange={(e) => setNouvelleTache(e.target.value)} />
          <input type="text" placeholder="Ajouter une descriiption" value={nouvelleDescription} onChange={(e) => setNouvelleDescription(e.target.value)} />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Taches;
