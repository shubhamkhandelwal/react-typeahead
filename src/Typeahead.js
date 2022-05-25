import { useState, useEffect } from 'react';
import Search from './Search';
import SearchList from './SearchList';
import styles from "./Typeahead.module.css";

function Typeahead({countriesList}) {
	const [countries, setCountries] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [imageURL, setImageURL] = useState("");

	useEffect(()=> {
		setCountries([...countriesList]);
	},[countriesList]);

	function onTextChange(e) {
		setSearchText(e.target.value);
	}

	function onCountrySelect(country) {
		setSearchText(country.name);
		setImageURL(country.image);
		countrySearch(country.name);
	}

	function countrySearch(searchText) {
		if(searchText) {
			let filteredList = [...countriesList.filter(country => country && country.name && country.name.toLowerCase().includes(searchText.toLowerCase()))]
			setCountries(filteredList);
		} else {
			setCountries([...countriesList]);
		}

	}
	

	return <div className={styles.typeahead_main}>
		<Search onCountrySearch={(e) => countrySearch(e.target.value)} onTextChange={onTextChange} searchText={searchText} imageURL={imageURL}/>
		<SearchList countries={countries} onCountrySelect={onCountrySelect} />
	</div>

}

export default Typeahead;