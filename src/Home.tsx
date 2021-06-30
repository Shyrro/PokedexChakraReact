import React from "react";
import { Switch, Route, Link, useHistory, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PokemonList from "./components/PokemonList";
import PokemonTeam from "./components/PokemonTeam";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

const Home = () => {
    const location = useLocation();
    const paths = ['/', '/team', '/list'];
    const startingIndex = paths.indexOf(location.pathname);

  return (
      <Tabs defaultIndex={startingIndex}>
        <TabList>
          <Tab>
            <Link to="/">Landing Page</Link>
          </Tab>
          <Tab>
            <Link to="/team">Team</Link>
          </Tab>
          <Tab>
            <Link to="/list">List</Link>
          </Tab>
        </TabList>
        <TabPanels>
          <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/team">
                <PokemonTeam />
              </Route>
              <Route path="/list">
                <PokemonList />
              </Route>
          </Switch>
        </TabPanels>
      </Tabs>
  );
};

export default Home;
