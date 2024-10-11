import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const PrivateRouter = ({ element, ...options }) => {
  const isAuthenticated =
    Auth.getUserDetails() !== undefined &&
    Auth.getUserDetails() !== null &&
    Auth.getToken() !== undefined;

  return isAuthenticated ? element : <Navigate to="/PageNotFound" />;
};

class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Usunięto ref={registerNav} */}
        <Router>
          <Routes>
            {HomeRoutes.map((homeRoute, index) => (
              <Route
                key={index}
                path={homeRoute.path}
                element={ // Użyj element zamiast component
                  <homeRoute.layout>
                    {homeRoute.element} {/* Zmienione z homeRoute.component */}
                  </homeRoute.layout>
                }
              />
            ))}

            {PrivateRoutes.map((privateRoute, index) => (
              <Route
                key={index}
                path={privateRoute.path}
                element={ // Użyj element zamiast component
                  <PrivateRouter
                    element={
                      <privateRoute.layout>
                        {privateRoute.element} {/* Zmienione z privateRoute.component */}
                      </privateRoute.layout>
                    }
                  />
                }
              />
            ))}

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;
