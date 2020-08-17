import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  job: {
    id?: string;
    url?: string;
    title?: string;
    company: string;
    full_time?: boolean;
    location: string;
    created_at?: string;
  };
}

const JobPosition: React.FC = () => {  
  const { id } = useParams()

  return (
    <Container>
      <Link to={"/"}>Home</Link>
      <Link to={`/positions/${"company"}`}>{"Company"}</Link>
      <p>{"Description"}</p>
    </Container>
  );
};

export default JobPosition;
