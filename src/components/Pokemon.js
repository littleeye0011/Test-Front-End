import axios from "axios";
import { useState, useEffect } from "react";
import "./style/Pokemon.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState();

  async function getPokemon() {
    const rsPokemonAll = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=104&offset=0`)
      .then((response) => {
        return response.data;
      });

    let finalResults = [];

    const fetchPokemons = rsPokemonAll.results.map((results) => {
      return fetch(results.url).then((response) => {
        return response.json();
      });
    });

    for (const fetchPokemon of fetchPokemons) {
      const pokemon = await fetchPokemon;
      finalResults.push(pokemon);
    }

    return finalResults;
  }

  useEffect(() => {
    setIsLoading(true);
  }, []);

  setTimeout(() => {
    getPokemon().then((finalResults) => {
      const appElement = document.getElementById("pokemon");
      let content = "";
      finalResults.forEach((pokemon) => {
        const pokemonContent = `
          <div className="pokeCard">
            <img src="${pokemon.sprites.front_default}" alt=${pokemon.name} />
            <h3 className="pokeName">${pokemon.name}</h3>
          </div>
          `;

        content += pokemonContent;
      });
      appElement.innerHTML = content;
    });
  }, 3500);

  return (
    <div>
      <h1>Pokemon</h1>
      <div id="pokemon">
        {isLoading === true && (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#cccccc">
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
            <div className="pokeCard">
              <h1 className="pokeImg">
                <Skeleton />
              </h1>
              <h1 className="pokeName">
                <Skeleton />
              </h1>
            </div>
          </SkeletonTheme>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
