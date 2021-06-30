import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid, Box, Image, Input, useToast } from "@chakra-ui/react";
import "./css/PokemonList.scss";
import { TeamContext } from "../state/TeamProvider";

const PokemonList = () => {
  const [list, setList] = useState([] as any[]);
  const [state, dispatch] = useContext(TeamContext);
  const toast = useToast();
  const [pokemonName, setPokemonName] = useState("");

  const addPokemon = (pokemon: any) => {
    if (state.team.length < state.max) {
      dispatch({ type: "add", pokemon });
      toast({
        title: "Pokemon added",
        description: `${pokemon.name} added to your team`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const renderMap = (items: any) => {
    return items.map((item: any) => (
      <Box
        className="pokemon-tile"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        key={item.id}
        onClick={() => addPokemon(item)}
      >
        <Image
          boxSize="200px"
          className="pokemon-image"
          src={item.sprites.other.dream_world.front_default}
          alt={item.id}
        ></Image>
        <span>{item.name.toUpperCase()}</span>
      </Box>
    ));
  };

  useEffect(() => {
    if (!list || !list.length) {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((res) => {
        const promisesArray: Promise<any>[] = [];
        res.data.results.forEach((pokemon: any) => {
          promisesArray.push(axios.get(pokemon.url));
        });

        Promise.all(promisesArray).then((objects: any[]) => {
          setList(objects.map((o: any) => o.data));
        });
      });
    }
  });

  return (
    <div className="layout">
      <Input
      className="filter-input"
        size="md"
        width="6 rem"
        placeholder="pokemon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      ></Input>
      <SimpleGrid
        className="pokemon-tiles"
        minChildWidth="200px"
        spacing="40px"
      >
        {renderMap(
          pokemonName
            ? list.filter((pokemon) =>
                pokemon.name.includes(pokemonName.toLowerCase())
              )
            : list
        )}
      </SimpleGrid>
    </div>
  );
};

export default PokemonList;
