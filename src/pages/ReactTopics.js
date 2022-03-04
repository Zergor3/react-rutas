import React from "react";
import { useParams } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vel,
        aperiam ducimus asperiores maxime minus hic adipisci consequuntur dolore
        quis nostrum natus perspiciatis rerum tempora labore deserunt
        exercitationem iure autem!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            vel, aperiam ducimus asperiores maxime minus hic adipisci
            consequuntur dolore quis nostrum natus perspiciatis rerum tempora
            labore deserunt exercitationem iure autem!
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
