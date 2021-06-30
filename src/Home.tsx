import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PokemonList from "./components/PokemonList";
import PokemonTeam from "./components/PokemonTeam";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

const Home = () => {
  return (
    <Router>
      <Tabs>
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
    </Router>
  );
};

export default Home;
