import { Route, Switch } from "react-router-dom";

// pages
import { Home, VideoDetail } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/video/:videoId" component={VideoDetail} />
    </Switch>
  );
};

export default Routes;
