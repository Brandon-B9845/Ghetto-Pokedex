import { useState, useEffect } from 'react';
import Card from './components/PokeCard';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import UsePokemon from './hooks/UsePokemon';
import UseLegendaries from './hooks/UseLegendaries';
import UseAttackDesc from './hooks/UseAttackDesc';

import './App.css';


function App() {
  // this is to track the page count which is sent back to the db to track what to display:
  const [pageCount, setPageCount] = useState(0)

  // these are the returns from our hooks to tell the app what to display:
  const { pokemon } = UsePokemon(pageCount);
  const { legendaries } = UseLegendaries(pageCount);
  const { attackDesc } = UseAttackDesc(pageCount)

  let display = pokemon
  // this will be for the dropdown box to allow filtering:
  const [value, setValue] = useState("")
  const options = [
    { label: 'Pokedex Number', value: 'Pokedex Number' },
    { label: 'Legendaries', value: 'Legendaries' },
    {label: 'Attack: High to Low', value: 'Attack: High to Low'},
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  if (value === 'By number'){
    display = pokemon
  }
  else if (value=== 'Legendaries'){
    display = legendaries
  }else if (value === 'Attack: High to Low'){
    display = attackDesc
  }
  console.log(value)

  //this is to make sure that the picture url is rendering the correct picture:
  function findPicture(pokedex_number) {
    if (pokedex_number < 10) {
      return `00${pokedex_number}`
    }
    else if (pokedex_number >= 10 && pokedex_number < 100) {
      return `0${pokedex_number}`
    } else return pokedex_number
  }

  // This is to increment/decrement the page count:
  function previous() {
    if (pageCount > 0) {
      setPageCount(prevVal => prevVal - 1)
    }
  }

  function next() {
    setPageCount(prevVal => prevVal + 1)
  }

  // This is the actual rendering of the app:
  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
          {/* <button onClick={leggyBoyos}>AHHHH</button> */}
          {/* <button onClick={"i"} >Click me</button> */}
          <Button name="previous-btn" handler={previous} title="Previous" />
          <Button name="next-btn" handler={next} title="Next" />
          <Dropdown  options={options} handleChange={handleChange}/>
          <p>You are on page {pageCount + 1}</p>
          <div className="wrapper">
            {display ? display.map((poke) => <Card key={poke.pokedex_number} picture={poke.pokedex_number < 494 ? `https://serebii.net/pokearth/sprites/dp/${findPicture(poke.pokedex_number)}.png` : `https://www.serebii.net/swordshield/pokemon/${poke.pokedex_number}.png`} name={poke.name} type={poke.type1} attack={poke.attack} defense={poke.defense} gen={poke.generation} pokedex={poke.pokedex_number} />) : <p>Click the button</p>}
          </div>

        </div>

      </header>

    </div>
  );
}

export default App;





// label="What do we eat?"options={options}value={value} onChange={handleChange}