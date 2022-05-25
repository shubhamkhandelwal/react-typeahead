import styles from "./Search.module.css";

function Search({onCountrySearch,onTextChange, searchText, imageURL}) {
	return <div className={styles.search_main}>
		{searchText && <img src={imageURL} alt=""/>} <input type="text" placeholder="enter value to search" onKeyUp={onCountrySearch} onChange={onTextChange} value={searchText}/>
	</div>
}

export default Search;