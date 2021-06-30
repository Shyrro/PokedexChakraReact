import React, { useContext } from "react";
import { TeamContext } from "../state/TeamProvider";

const PokemonTeam = () => {
  const [state] = useContext(TeamContext);

  return (
    <div>
      <h1>Pokemon team</h1>
      <ul>
        {state.team.map((pokemon: any) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonTeam;
