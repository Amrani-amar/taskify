// import React, { useState, useEffect } from 'react';
// import apiTaches from '../api/apitaches';

// const Taches = () => {
//   const [taches, setTaches] = useState([]);
//   const [titre, setTitre] = useState('');

//   useEffect(() => {
//     fetchTaches();
//   }, []);

//   const fetchTaches = async () => {
//     try {
//       const response = await apiTaches.getAll();
//       setTaches(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const createTache = async () => {
//     try {
//       const response = await apiTaches.create({ titre });
//       setTaches([...taches, response.data]);
//       setTitre('');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteTache = async (id) => {
//     try {
//       await apiTaches.remove(id);
//       const updatedTaches = taches.filter(tache => tache.id !== id);
//       setTaches(updatedTaches);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Liste des tâches :</h1>
//       <div>
//         <label htmlFor="titre">Ajouter une tâche :</label>
//         <input
//           type="text"
//           id="titre"
//           value={titre}
//           onChange={e => setTitre(e.target.value)}
//           placeholder="Entrez un titre"
//         />
//         <button onClick={createTache}>Ajouter</button>
//       </div>
//       <ul>
//         {taches.map(tache => (
//           <li key={tache.id}>
//             {tache.titre}
//             <button onClick={() => deleteTache(tache.id)}>Supprimer</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Taches;

import React, { useState } from 'react';
import apiTaches from '../api/apitaches';
import { useQuery, useMutation } from '@tanstack/react-query';
const Taches = () => {
  // const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [nouvelleDescription, setNouvelleDescription] = useState('');
  // const [updatedTache, setUpdatedTache] = useState('');


    const {data, refetch} = useQuery(["tache"], apiTaches.getAll );
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await apiTaches.getAll();
  //     setTaches(result.data);
  //   };
  //   fetchData();
  // }, []);

 

    const deleteTacheMutation = useMutation(apiTaches.remove ,{
      onSuccess : async ()=>{
        await refetch();
      }
    });
    const ajouterTacheMutation = useMutation(apiTaches.create ,{
      onSuccess : async ()=>{
        await refetch();
      }
    });
    const updateTacheMutation = useMutation(apiTaches.update ,{
      onSuccess : async ()=>{
        await refetch();
      }
    });
 
     const handleAjouterTache = async (e) => {
    e.preventDefault()
    ajouterTacheMutation.mutate({titre:nouvelleTache, description: nouvelleDescription})
    setNouvelleTache('');
    setNouvelleDescription('');
  };
     const handleupdateTache = (tacheid) => {
      // console.log(tacheid);
       updateTacheMutation.mutate({titre:nouvelleTache, description: nouvelleDescription, id:tacheid})
  };

  

  return (
    <div>
      <h1>Liste des tâches :</h1>
      <ul>
        {data?.map(tache => (
          <li key={tache._id}>
            <form>
            <input defaultValue={tache.titre }     />
            </form>
            <button onClick={() => deleteTacheMutation.mutate(tache._id)}>Supprimer</button>
            <button onClick={ (e)=>{
              e.preventDefault()
              handleupdateTache(tache._id)
            }}>modifier</button>
          </li>
        ))}
      </ul>
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
