import React from "react";

import { Container, TopSide, BottomSide } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  id?: string;
  url?: string;
  title?: string;
  company: string;
  full_time?: boolean;
  location: string;
  created_at?: string;
}

const JobCard: React.FC<Props> = ({
  id,
  url,
  title,
  company,
  full_time,
  location,
  created_at,
}) => {
  return (
    <Container>
      <TopSide>
        <Link to={`/positions/${id}`}>{title}</Link>
        <Link to={`/positions/${company}`}>{company}</Link>
      </TopSide>

      <BottomSide>
        <Link to={`/positions/${location}`}>{location}</Link>
      </BottomSide>
    </Container>
  );
};

export default JobCard;
