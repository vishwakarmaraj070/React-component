import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const ProtectedRoute = props => {
  console.log(window.location.pathname);

  try {
    if (window.localStorage.token) {
      console.log("login");

      switch (window.location.pathname) {
        case "/":
        case "/login":
        case "/signup":
        case "/activateemail":
        case "/updatePassword":
        case "/forgetpassword":
        case "/confirmemail":
          return <Redirect to="/dashboard" />;
        default:
          return props.children;
      }
    } else {
      console.log("logout");

      switch (window.location.pathname) {
        case "/":
        case "/login":
        case "/signup":
        case "/activateemail":
        case "/updatePassword":
        case "/forgetpassword":
        case "/confirmemail":
          return props.children;
        default:
          return <Redirect to="/login" />;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

ProtectedRoute.propTypes = {};

export default ProtectedRoute;
