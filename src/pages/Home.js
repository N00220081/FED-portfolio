import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
        console.log(response.data);
        setCountriesList(response.data);
    })
    .catch(error => {
        console.error(error);
    });
  }, []);

  let countryCards = countriesList.map((country, index) => {
    return(
    <div key={index}>
        <img src={country.flags.png} alt={`${country.name.common}'s flag`}/>
        <p>{country.name.common}</p>
    </div>
    )
  });
  return (
    <div>
        {countryCards}
    </div>
  );
};

export default Home;
