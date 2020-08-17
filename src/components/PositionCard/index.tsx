import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

const PositionCard: React.FC = () => {
  return (
    <Container>
      <Link to={`/positions/${"job.company"}`}>{"job.company"}</Link>
    </Container>
  );
};

export default PositionCard;
