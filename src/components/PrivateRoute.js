import { Redirect, Route } from "react-router-dom";

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */
let auth;
auth = false;
auth = true;
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
