import { useState } from "react";

function App() {
  // state
  const [compteur, setCompteur] = useState(1);
  const [fruits, setFruits] = useState([
    {id: 1, nom: 'Abricot'},
    {id: 2, nom: 'Banane'},
    {id: 3, nom: 'Cerise'}
  ]);
  // comportements
  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  const handleDelete = (id) => {  
      // 1. Copie du state
      const fruitsCopy = [...fruits];

      // 2. Manipuler le state
      const fruitsCopyUpgraded = fruitsCopy.filter(fruit => fruit.id !== id);

      // 3. Modifier state avec setter
      setFruits(fruitsCopyUpgraded);
  };
  // affichage (render)

  return (
    <div>
      <div>
        <h1>{compteur}</h1>
        <button onClick={handleClick}>Incrémente</button>
      </div>
      <div>
        <h1>Liste de courses :</h1>
        <ul>
          {fruits.map((fruit) => {
            return <li>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>X</button></li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
