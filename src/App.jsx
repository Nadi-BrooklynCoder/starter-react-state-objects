import { dogsData } from "./data";
import { useState } from "react";
import { v4 as generateUniqueID } from "uuid";
import Form from "./Components/Form";

function App() {
  const [checked, setChecked] = useState(false);
  const [selectOption, setSelectOption] =  useState('');
  const [nickName, setNickName] = useState('');

  const [dogs, setDogs] = useState(dogsData);
  //State variable for our current dog
  const [currentDog, setCurrentDog] = useState({
    id: generateUniqueID(),
    name: 'Pookie',
    breed: 'Poodle',
    age: 4
  })

  //Function to add a new dog to our list of dogs
  const addDog = () => {
    const rover = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };

    setDogs([...dogs, rover]);
}

const updateCurrentDog = () => {
  setCurrentDog({...currentDog, name: 'Leroy', breed: 'german sherpard', age: 20})
}

const handleCheckBoxChange = () => {
  setChecked(!checked)
}

const handleSelectChange = (e) => {
  setSelectOption(e.target.value)
}

const handleNickNameChange = (e) => {
  setNickName(e.target.value);
}


  

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <h3>You selected {selectOption}</h3>
      <aside></aside>
      <main>
        <p>Current Dog: {currentDog.name} the {currentDog.breed} is {currentDog.age} year{currentDog.age > 1 && 's' } old.</p>
      <button onClick={addDog}>Add a new dog</button>
      <button onClick={updateCurrentDog}>Update current dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span>{dog.name}</span>
            </li>
            )
          })}
        </ul>
        <form>
          <label htmlFor="swim">Likes Swimming</label>
          <input id="swim" type="checkbox" checked={checked} onChange={handleCheckBoxChange}/>
          <label htmlFor="">Which do you perfer?</label>
          <select onChange={handleSelectChange}>
            <option value=""></option>
            <option value="Cats">Cats!</option>
            <option value="Dogs">Dogs!</option>
          </select>
          <label htmlFor="">Nickname: </label>
          <input type="text" onChange={handleNickNameChange} />
           <h3>
          {nickName} selected {selectOption}
        </h3>
        </form>
      </main>
      <Form />
    </div>
  );
}

export default App;
