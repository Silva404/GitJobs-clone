import React from "react";
import { Container, TopSide, BottomSide } from "./styles";
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

const JobCard: React.FC<Props> = ({ job }) => {
  return (
    <Container>
      <TopSide>
        <Link to={`/positions/${job.id}`}>{job.title}</Link>
        <Link to={`/positions/${job.company}`}>{job.company}</Link>
      </TopSide>

      <BottomSide>
        <Link to={`/positions/${job.location}`}>{job.location}</Link>
      </BottomSide>
    </Container>
  );
};

export default JobCard;