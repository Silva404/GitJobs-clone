import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

const JobPosition: React.FC = () => {
  return (
    <Container>
      <Link to={"/"}>Home</Link>
      <Link to={`/positions/${"company"}`}>{"Company"}</Link>
      <p>{"Description"}</p>
    </Container>
  );
};

export default JobPosition;
