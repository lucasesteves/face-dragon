import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useLogin } from "../hooks";
import { Login, Panel, SetDragon } from "../page";
import { getData } from "../utils";

const App: React.FC = () => {
  const { user, setUser } = useLogin();

  setUser(getData());

  return (
    <Switch>
      <Route path="/" exact>
        {!!user ? <Redirect to="/panel" /> : <Login />}
      </Route>
      {!!user ? (
        <Switch>
          <Route path="/panel" exact component={Panel} />
          <Route path="/panel/detail/:id" exact component={SetDragon} />
          <Route path="/panel/edit/:id" exact component={SetDragon} />
          <Route path="/panel/add" exact component={SetDragon} />
        </Switch>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default App;
