import React, { useContext } from "react";
import AuthContext, { AuthProvider } from "../store/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
const Home = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button className={classes.button} onClick={auth.OnLogout}>
        Log Out
      </Button>
    </Card>
  );
};

export default Home;
