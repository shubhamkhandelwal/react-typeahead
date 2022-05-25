
import './App.css';
import Typeahead from './Typeahead';
import { useEffect, useState } from 'react';


function App() {

  const [ countries, setCountries] = useState([]);
	useEffect(() =>{
		async function fetchData() {
			try{
				let response = await fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json");
				let responseData = await response.json();
				let countries = responseData?.map(country => { 
					return {
						name: country.name,
						image: country.image
					}
				});
				setCountries(countries);
				
			} catch (e){
				console.log(e)
			}
		}
		fetchData();
	},[]);

  return (
    <div className="App">
      <Typeahead countriesList={countries}/>
    </div>
  );
}

export default App;
