import React, { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import "./css/PokemonList.css";

const PokemonList = () => {
  const [list, setList] = useState([] as any[]);

  useEffect(() => {
    if (!list || !list.length) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then((res) => {
          const promisesArray: Promise<any>[] = [];
          res.data.results.forEach((pokemon: any) => {
              promisesArray.push(axios.get(pokemon.url));
          });

          Promise.all(promisesArray).then((objects: any[]) => {
            setList(objects.map((o: any) => o.data));
          })
        });
    }
  });

  return (
    <SimpleGrid className="pokemon-tiles" minChildWidth="200px" spacing="40px">
      {list.map((item: any) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          key={item.id}
        >
          <Image src={item.sprites.other.dream_world.front_default} alt={item.id}></Image>
          {item.name}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PokemonList;
