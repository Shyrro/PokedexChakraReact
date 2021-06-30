import React, { createContext, useReducer } from "react";

const teamReducer = (state, action) => {
  const team = state.team.slice();
  switch (action.type) {
    case "add":
      if (state.team.length < 6) {
        team.push(action.pokemon);
        return { ...state, team };
      }
      return state;
    case "remove":
      const indexToRemove = team.indexOf(action.pokemon);
      team.splice(indexToRemove, 1);
      return { ...state, team };
    default:
      return state;
  }
};

const initialTeamState = {
  team: [],
  max: 6,
};

export const TeamContext = createContext({
  state: initialTeamState,
  dispatch: () => null,
});

export const TeamProvider = ({ children }) => {
  const context = useReducer(teamReducer, initialTeamState);

  return (
    <TeamContext.Provider value={context}>
      {children}
    </TeamContext.Provider>
  );
};
