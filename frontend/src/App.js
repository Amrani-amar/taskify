// import React from 'react';
// import './App.css';
// import Navbare from './composant/navbar';
// import Footer from './composant/footer';
// import { Taches } from './composant/taches.';



// function App() {
//   return (
//     <div className="App">
//      <h1>salut salut</h1>
//      <Navbare />
//      <Taches />
//      <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Navbare from './composant/navbar';
import Footer from './composant/footer';
import Baches from './composant/taches';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient() 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>salut salut</h1>
      <Navbare />
      <Baches />
      <Footer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
