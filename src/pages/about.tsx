import React, { FC, useEffect, useState } from "react";
import Ipage from "../interfaces/page";
import logging from "../config/logging";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

const About: FC<Ipage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    logging.info(`loading ${props.name}`);
    let number = props.match.params.number;
    if (number) {
      setMessage(`The number is ${number}`);
    } else {
      setMessage("No number was provided");
    }
  }, [props]);
  return (
    <div>
      <h1>{message}</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default About;
