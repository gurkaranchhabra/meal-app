import NavBar from './components/NavBar';
import Results from './components/Results';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const[results,setResults] = useState([]);
  const[search,setSearch] = useState('curry');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(data => data.json()).then(res => {
      setResults(res.meals);
    })
  },[])

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(data => data.json()).then(res => {
      if(res.meals !== null){
        setResults(res.meals);
      }else{
        setResults(null);
    }})
  }

  const handleClick = (val) => {
    setSearch(val);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(data => data.json()).then(res => {
      if(res.meals !== null){
        setResults(res.meals);
      }else{
        setResults(null);
    }})
  }

  return (
    <div className="App">
        <div className="container">
            <NavBar handleClick={handleClick}/>
            <input type="text" className='textBox' value={search} onChange={e => handleSearch(e)}/>
            {results === null ? (
              <h4 className='not-found'>Meal not found!</h4>
            ): (
              <Results results={results}/>
            )}
        </div>
    </div>
  );
}

export default App;
