import axios from 'axios';
import React, { useEffect } from 'react'

const Pokemons = () => {

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=800")
            .then(({data}) => console.log(data))
            .catch((err) => console.log(error));
    }, []);

  return (
    <section>

    </section>
  )
}

export default Pokemons