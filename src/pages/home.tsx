import React, { FC, useEffect } from "react";
import Ipage from "../interfaces/page";
import logging from "../config/logging";

const Home: FC<Ipage> = (props) => {
  useEffect(() => {
    logging.info(`loading ${props.name}`);
  }, []);
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};

export default Home;
