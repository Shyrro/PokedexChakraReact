import React, { useContext } from "react";
import { TeamContext } from "../state/TeamProvider";
import { Box, SimpleGrid, Image} from "@chakra-ui/react";

const PokemonTeam = () => {
  const [state,] = useContext(TeamContext);

  return (
    <div>
      <h1>Pokemon team</h1>
      <SimpleGrid
        className="pokemon-tiles"
        minChildWidth="200px"
        spacing="40px"
      >
        {state.team.map((item: any) => (
          <Box
            className="pokemon-tile"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={item.id}
          >
            <Image
              boxSize="200px"
              className="pokemon-image"
              src={item.sprites.other.dream_world.front_default}
              alt={item.id}
            ></Image>
            <span>{item.name.toUpperCase()}</span>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default PokemonTeam;
