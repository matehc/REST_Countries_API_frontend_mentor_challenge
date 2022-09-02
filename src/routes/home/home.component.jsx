import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


import SearchBox from "../../components/search-box/search-box.component";
import CardList from "../../components/card-list/card-list.component";

const COUNTRY_API_ALL = 'https://restcountries.com/v3.1/all';


const Home = () => {

    const [ countries, setCountries ] = useState([]);

    // store the state of the searchfield 
    // when a user types in the name of the country in the field.
    const [ searchField, setSearchField ] = useState('');

    const [ filteredCountries, setFilteredCountries ] = useState(countries);



    // fetches country data when initial component renders.
    useEffect(() => {
        fetch (COUNTRY_API_ALL)
        .then(res => res.json())
        .then( result => setCountries(result)).catch(err => console.log(err))
    },[])
    
    
   // console.log(countries, "global");

    // function that runs and sets the user text string when a user searches for a country
    const onSearchChangeHandler = (e) => {
        console.log("i'v changed onsearch handler");
        const searchFieldString = e.target.value.toLocaleLowerCase();

        console.log(searchFieldString);

        setSearchField(searchFieldString);
        console.log(searchField, "searchfield")
    };

    useEffect( () => {
        const filteredSearch = countries.filter( (country) => country.name.common.toLocaleLowerCase().includes(searchField));
        console.log(filteredCountries, "filter");

        setFilteredCountries(filteredSearch);

    }, [countries, searchField])



    return (
        <>
            <Outlet />
            <div>
            {/*  i need to pass region data into the searchBox */}
                <SearchBox onChangeHandler={onSearchChangeHandler} />
                <CardList countries={filteredCountries}/>
            </div>
        </>
    )
}

export default Home;