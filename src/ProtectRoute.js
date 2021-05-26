import React from "react";
import { Route, Redirect } from "react-router-dom";
function ProtectRoute({ isAuth:isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(isAuth) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: this.props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectRoute;
