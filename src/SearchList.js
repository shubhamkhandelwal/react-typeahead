import styles from "./SearchList.module.css";

function SearchList({countries, onCountrySelect}) {
	return<div className={styles.searchlist_main}>
		{countries.map(country => <span key={country.name} onClick={() => onCountrySelect(country)}><img src={country?.image} alt={country?.name} />{country.name}</span>)}
	</div>
}

export default SearchList